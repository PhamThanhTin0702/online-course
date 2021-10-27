import axios from "@midleware/interceptor"

export const AuthentGoogleAPI = (tk) => {
    return new Promise((resolve, reject) => {
        axios.get(
            `${process.env.NEXT_PUBLIC_GOOGLE_API_AUTHENT}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + tk
                }
            }
        )
        .then((res) => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}