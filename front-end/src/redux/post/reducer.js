import { createPostAction } from "./actionType"


const initState = {
    post_loading: false,
    post_data: null,
    post_error:false,
}

export const postReducer = (state=initState, action) => {
    switch (action.type) {
        case createPostAction.create_post_request:
            return {
                ...state,
                post_loading: true,
                post_error: false,
            }
        case createPostAction.create_post_success:
            return {
                ...state,
                post_loading: false,
                post_error:false,
                post_data: action.payload,
            }
        case createPostAction.create_post_failure:
            return {
                ...state,
                post_loading: false,
                post_error: action.payload,
            }
        default:
            return state;
    }
}