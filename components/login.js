import styles from "../styles/login.module.css";
import {useCookies} from "react-cookie";
import {useFirebase} from "../lib/firebase"
import { useEffect } from "react";
import {Consts} from "@utility/consts/key.consts"
import { GoogleLogin } from 'react-google-login';
import { RegistryGmailAPI } from "@utility/api/registry_gmail.api";


const LoginForm = (props) => {
  const [cookie, setCookie] = useCookies([Consts.KeyAccessToken])
  const {signIn, currUser} = useFirebase()
  // const responseGoogle = (response) => {
  //   if (response) {
  //     setCookie("accessToken", response.accessToken, {path: "/"});
  //     window.location = window.location.pathname;
  //   }
  // }

  // const loginFirebase = () => {
  //   signIn().then(res => {
  //     setCookie(Consts.KeyAccessToken, res.accessToken, {path: "/"});
  //     //window.location = window.location.pathname;
  //   }).catch(err => {
  //     console.err(err)
  //   })
  // }

  const onLoginGoogleSuccess = (credential) => {
    const {access_token} = credential.tokenObj

    RegistryGmailAPI(access_token)
    .then(res => {
      console.log(res)
      let expires = new Date()
      expires.setTime(expires.getTime() + res.data.expires_in)

      document.cookie = Consts.KeyAccessToken + "=" + res.data.access_token + ";" + "expires=" + expires + ";path=/;";
      document.cookie = Consts.KeyRefreshToken + "=" + res.data.refresh_token + ";path=/;";
      window.location = window.location.pathname;
    }).catch(err => {
      console.error(err)
    })

    //

    //setCookie(Consts.KeyAccessToken, access_token, [options]);
  }

  const onLoginGoogleError = (res) => {
    window.location = window.location.pathname;
  }

  return (
    <div className={`${styles.login_form}`}>
      <div className={styles.header}>
        <div className={styles.logo_wrapped}>
          <img src="/images/200lab-logo.svg" />
        </div>
      </div>
      <div className={`${styles.input_wrapped}`}>
        <input className={styles.text_input} placeholder="Email" />
      </div>
      <div className={`${styles.input_wrapped}`}>
        <input
          className={styles.text_input}
          placeholder="Password"
          type="password"
        />
      </div>
      <div className={`${styles.bt_login}`}>Login</div>
      <div className={`${styles.line_break}`}>
        <span className={styles.text}>OR</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.login_methods}>
        <div className={styles.provider}>
          <img className={`${styles.logo}`} src="/images/apple.svg" />
        </div>
        <div className={styles.provider}>
          <img className={`${styles.logo}`} src="/images/facebook.svg" />
        </div>
        <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            onSuccess={onLoginGoogleSuccess}
            onFailure={onLoginGoogleError}
            buttonText=""
            icon={false}
            className={styles.provider}
        >
            <img className={`${styles.logo}`} src="/images/google.svg" />
        </GoogleLogin>
      </div>
    </div>
  );
};

export default LoginForm;
