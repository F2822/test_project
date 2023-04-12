import { SET_USER, REMOVE_USER } from "../actionTypes/auth";

const initialStore = {
    user: null
};

const authReducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...store,
                user: action.payload.user
            };
        case REMOVE_USER:
            return {
                ...store,
                user: null
            };
        default:
            return store;
    }
};

export default authReducer;