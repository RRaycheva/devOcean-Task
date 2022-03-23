import service from "../../app/services/service"
import { GET_BISINESS_FAIL, GET_BISINESS_SUCCESS } from "../types"


export const getBusiness = () => (dispatch: any) => {
    return service.getBusiness()
        .then((response) => {
            dispatch({
                type: GET_BISINESS_SUCCESS,
                payload: response.data
            })
        })
        .catch((response)=>{
            dispatch({
                type: GET_BISINESS_FAIL,
                payload: response.data.message
            })
        })
}