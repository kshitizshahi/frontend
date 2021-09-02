import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,  
} from "../constants/signInConstant";

export const userSignInReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userDetails: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }

}



