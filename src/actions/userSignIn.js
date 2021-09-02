import axios from "axios";
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,  
} from "../constants/signInConstant";

export const signIn = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {
            email,
            password
        }
    })

    try {
        const result = await axios.post('http://192.168.0.104:8000/api/v1/user/login', { email, password });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: result.data
        })

        localStorage.setItem('userDetails', JSON.stringify(result.data));

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

