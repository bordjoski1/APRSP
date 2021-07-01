import {auth} from '../firebase'
import ReactRoutes from '../config/ReactRoutes'

export const RegisterService = {

    register: (email, password) => {
        return new Promise((resolve, recejt) => {
            auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                localStorage.setItem("UserID", JSON.stringify(user))
                window.location.href = ReactRoutes.HOME
                resolve(user)
              })
              .catch((error) => {
                var errorMessage = error.message;
                recejt(errorMessage)
              });
        })
    }

}

export default RegisterService