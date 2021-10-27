import axios from "@midleware/interceptor"

export const GetUserProfileAPI = (tk) => {
    return new Promise((resolve, reject) => {
        axios.get(
            "/profile",
            {
                headers: {
                    'Authorization': 'Bearer ' + tk
                }
            },
        )
        .then((res) => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}