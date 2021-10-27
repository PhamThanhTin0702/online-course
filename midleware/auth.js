import { Consts } from "@utility/consts/key.consts";
import { actions } from "@redux/actions/page.actions";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { GetUserProfileAPI } from "@utility/api/get_profile.api";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(Consts.KeyAccessToken);
  const disPatch = useDispatch()

  const signOut = () => {
    removeCookie(Consts.KeyAccessToken)
    removeCookie(Consts.KeyRefreshToken)
  }


  useEffect(() => {
    const tk = cookie[Consts.KeyAccessToken];

    if (tk) {
      GetUserProfileAPI(tk)
        .then((res) => {
          console.log(res.data)
            const user = {email: res.data.email, photoURL: res.data.avatar.url}
            disPatch({type: actions.PAGE_SET_CURR_USER, value: user})
            setIsLoggedIn(true)
        })
        .catch(err => {
          setIsLoggedIn(false)
        })
    }
  }, []);

  return { user: user, isLoggedIn: isLoggedIn, signOut: signOut };
};
