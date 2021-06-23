import {auth} from '../firebase'
import ReactRoutes from '../config/ReactRoutes'

export const RegisterService = {

    register: async (email, password) => {
        const user = await auth.createUserWithEmailAndPassword(email, password)
        localStorage.setItem("UserID", JSON.stringify(user))

        window.location.href = ReactRoutes.HOME

        return user      

    }

}

export default RegisterService