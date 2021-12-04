const REGISTER = 'REGISTER';


const initialState = {
  token: '',
};

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case REGISTER:
      const {
        token
      } = action.payload
      localStorage.setItem('token', token);
      return {
        ...state,
          token,
      };

    default:
      return state;
  }
}

export const registerAC = (payload) => ({
  type: REGISTER,
  payload
})
