const SET_ME = 'SET_ME';
const SET_USERS = 'SET_USERS';
const DISABLE_USER = 'DISABLE_USER';
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const initialState = {
  user: null,
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ME:
      return {
        ...state,
        user: {
          ...action.payload,
        }
      };
    case SET_USERS:
      return {
        ...state,
        users: [
          ...state.users ,
          ...action.payload.map((user)=>({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            isAdmin: user.isAdmin,
            isBlocked: user.isBlocked
          }))
        ]
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case DISABLE_USER:
      const { id, isBlocked } = action.payload
      const index = state.users.findIndex(u => u.id === id)
      const newUsers = [...state.users]
      newUsers[index].isBlocked = isBlocked

      return {
        ...state,

      }
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload._id)
      }
    default:
      return state;
  }
}

export const setMeAC = (payload) => ({
  type: SET_ME,
  payload
})

export const setUsersAC = (payload) => ({
  type: SET_USERS,
  payload
})

export const disableUserAC = (payload) => ({
  type: DISABLE_USER,
  payload
})

export const addUserAC = (payload) => ({
  type: ADD_USER,
  payload
})

export const removeUserAC = (payload) => ({
  type: REMOVE_USER,
  payload
})




