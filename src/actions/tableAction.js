import axios from "axios";
import {
    TABLE_NO_REQUEST,
    TABLE_NO_SUCCESS,
    TABLE_NO_FAIL,  
} from "../constants/tableConstants";

export const table = (tableNo) => async (dispatch, getState) => {
    dispatch({
        type: TABLE_NO_REQUEST,
        payload: {
            tableNo,
        }
    })

    try {
        const { userSignin: { userDetails } } = getState();
        const result = await axios.get(`http://192.168.0.104:8000/api/v1/table/getsingle`, {
            headers: {
                Authorization: `Bearer ${userDetails.data.access_token}`,
            }
        }, {body: {
            table_id: tableNo
        }});
        dispatch({
            type: TABLE_NO_SUCCESS,
            payload: result.data
        })

        localStorage.setItem('tableDetails', JSON.stringify(result.data));

    } catch (error) {
        dispatch({
            type: TABLE_NO_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

