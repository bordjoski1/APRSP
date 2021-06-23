import {auth} from '../firebase'
import ReactRoutes from '../config/ReactRoutes'

export const LoginService = {

    login: async (email, password) => {
        const user = await auth.signInWithEmailAndPassword(email, password)
        localStorage.setItem("UserID", JSON.stringify(user))

        
        window.location.href = ReactRoutes.HOME

        return user      

    }

}

export default LoginService