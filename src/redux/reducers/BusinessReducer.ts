import { GET_BISINESS_FAIL, GET_BISINESS_SUCCESS } from "../types";


const initialState = {
    business: []
}

export default function (state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case GET_BISINESS_SUCCESS:
            return {
                ...state,
                business: payload
            }
        case GET_BISINESS_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}