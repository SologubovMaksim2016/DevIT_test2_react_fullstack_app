import axios from "axios";
import {setUsersAC, setMeAC, disableUserAC, removeUserAC} from "../usersReduser"

const tokenStr = localStorage.getItem("token")

export const fetchUsers = (history) => {
    return async (dispatch) => {
        let res
        try {
            res = await axios.get('http://localhost:5000/api/users',{
                    headers: {"Authorization" : `Bearer ${tokenStr}`}
                })
            dispatch(setUsersAC(res.data))
        } catch (e) {
            if (res && res.status === 401) {
                history.push('/auth/login')
            }
            console.error(e);
        }
    }
}

export const fetchMe = (history) => {
    return async (dispatch) => {
        let res
        try {
            res = await axios.get('http://localhost:5000/api/auth',{
                    headers: {"Authorization" : `Bearer ${tokenStr}`}
                })
            dispatch(setMeAC(res.data))
        } catch (e) {
            if (res && res.status === 401) {
                history.push('/auth/login')
            }
            console.error(e);
        }
    }
}

export const disableUser = (id,status) => {
    return async (dispatch) => {
        try {
            const {
                data
            } = await axios.put('http://localhost:5000/api/users/'+id,{
                isBlocked: status
            },
              {
                headers: {"Authorization" : `Bearer ${tokenStr}`}
            })
            dispatch(disableUserAC(data))
        } catch (e) {
            console.error(e);
        }
    }
}

export const removeUser = (id) => {
    return async (dispatch) => {
        try {
            const {
                data
            } = await axios.delete('http://localhost:5000/api/users/'+id,{
                  headers: {"Authorization" : `Bearer ${tokenStr}`}
              })
            dispatch(removeUserAC(data))
        } catch (e) {
            console.error(e);
        }
    }
}
