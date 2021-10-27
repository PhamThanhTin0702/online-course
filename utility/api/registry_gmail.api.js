import axios from "@midleware/interceptor"

export const RegistryGmailAPI = (tk) => {
    return new Promise((resolve, reject) => {
        axios.post(
            "/auth/gmail",
            {
                gmail_token: tk
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