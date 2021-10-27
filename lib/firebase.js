import firebase from 'firebase'
import { firebaseConfig } from "../configs/google_config"

export const useFirebase = () => {
    const provider = new firebase.auth.GoogleAuthProvider
    const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    return {
        signIn: () => {
            return new Promise((resol, rej) => {
                app.auth().signInWithPopup(provider)
                .then(res => {
                    console.log(res)
                    let user = {
                        email: res.user.email,
                        emailVerified: res.user.emailVerified,
                        displayName: res.user.displayName,
                        photoURL: res.user.photoURL,
                    }

                    resol({user: user, accessToken: res.credential.accessToken})
                })
                .catch(err => rej(err))
            })
        },
        signOut: () => {app.auth().signOut()},
        currUser: app.auth().currentUser,
        onAuthChange: (func ) => {
            app.auth().onAuthStateChanged(state => func(state))
        }
    }
}