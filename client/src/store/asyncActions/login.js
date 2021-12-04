import axios from "axios";
import {
    loginAC
} from "../authReduser";

export const login = (user, history) => {
    console.log(user);
    console.log(history);
    return async (dispatch) => {
        try {
            const {
                data
            } = await axios.post('http://localhost:5000/api/auth/login', user)
            dispatch(loginAC(data))
            window.location.href = "/";
        } catch (e) {
            console.error(e);
        }
    }
}
