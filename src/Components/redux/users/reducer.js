import { GET_CONTACTS, ADD_NEW_CONTACT, DELETE_CONTACT, SAVE_CONTACT } from "./constants";


const initialState = {
    users: []
}

function UserReducer (state = initialState, action) {
    console.log(state, action)
    switch(action.type) {
        case GET_CONTACTS:
            return {...state, users: action.payload}
        case ADD_NEW_CONTACT:
            return {...state, users: [...state.users, action.payload]}
        case DELETE_CONTACT:
            return {users: [...state.users.filter(user => action.payload !== user.id)]}
        case SAVE_CONTACT:
            return {...state, users: state.users.map(item => item.id === action.payload.id ? action.payload : item)}
        default:
            return state
    }
}

export default UserReducer;