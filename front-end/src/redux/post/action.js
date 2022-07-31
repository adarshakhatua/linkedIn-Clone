import axios from "axios"
import { createPostAction } from "./actionType"

export const createPostRequest = () => {
    return {
        type:createPostAction.create_post_request,
    }
}

export const createPostSuccess = (data) => {
    return {
        type: createPostAction.create_post_success,
        payload:data
    }
}

export const createPostFailure = (data) => {
    return {
        type: createPostAction.create_post_failure,
        payload: data
    }
}


export const createPost = (payload,userId) => async (dispatch) => {
    dispatch(createPostRequest());
    return axios({
        url: `http://localhost:8080/posts/${userId}`,
        method: "POST",
        data: payload,
    })
        .then((res) => dispatch(createPostSuccess(res.data)))
        .catch((err) => dispatch(createPostFailure(err.message)));
}