export const userReducer = (state, action) => {
    switch(action.type) {
        case 'REGISTER_SUCCESS':
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }

        case 'LOGOUT':
            return{
                ...state,
                user: null,
                token: null
            }

        default:
            return state;
    }
}