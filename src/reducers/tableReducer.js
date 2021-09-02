import {
    TABLE_NO_REQUEST,
    TABLE_NO_SUCCESS,
    TABLE_NO_FAIL,  
} from "../constants/tableConstants";

export const tableReducer = (state = {}, action) => {
    switch (action.type) {
        case TABLE_NO_REQUEST:
            return { loading: true };
        case TABLE_NO_SUCCESS:
            return { loading: false, tableInfo: action.payload };
        case TABLE_NO_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;

    }

}



