import axios from "axios";

export const registration = (user, actionCreator,  history = null) => {
    return async (dispatch) => {
        try {
            console.log(user);
            const {
                data
            } = await axios.post('http://localhost:5000/api/auth/registration', user)
            console.log(actionCreator)
            dispatch(actionCreator(data))

            history && history.push("/")
        } catch (e) {
            console.error(e);
        }
    }
}
