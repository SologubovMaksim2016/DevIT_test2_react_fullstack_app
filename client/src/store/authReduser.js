const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  token: '',
};

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      const {
        token
      } = action.payload
      localStorage.setItem('token', token);
      return {
        ...state,
          token,
      };
    case LOGOUT:
      localStorage.removeItem('token');     
      return {
        ...state,
          token: '',
      };
    default:
      return state;
  }
}

export const loginAC = (payload) => ({
  type: LOGIN,
  payload
})


export const logoutAC = () => ({
  type: LOGOUT
})