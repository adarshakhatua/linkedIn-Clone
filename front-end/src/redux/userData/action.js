import axios from "axios"
import { getUserDataAction } from "./actionType"

export const getUserDataRequest = () => {
    return {
        type: getUserDataAction.get_userData_request,
    }
}

export const getUserDataSuccess = (data) => {
    return {
        type: getUserDataAction.get_userData_success,
        payload:data,
    }
}

export const getUserDataFailure = (data) => {
    return {
        type: getUserDataAction.get_userData_failure,
        payload: data,
    }
}

export const fetchUserData = (payload) => async (dispatch) => {
    dispatch(getUserDataRequest());

    return (
        axios({
            url: "http://localhost:8080/userProfiles/",
            method: "GET",
            params:payload,
        })
            .then((res) => dispatch(getUserDataSuccess(res.data)))
            .catch((err) => dispatch(getUserDataFailure(err.message)))
    )

}