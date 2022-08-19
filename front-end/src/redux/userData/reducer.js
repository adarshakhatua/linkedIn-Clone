import { getUserDataAction } from "./actionType";

const initState = {
    get_userData_loading: false,
    get_userData_data: null,
    get_userData_error:false,
}

export const userDataReducer = (state=initState,action) => {
    switch (action.type) {
        case getUserDataAction.get_userData_request:
            return {
                ...state,
                get_userData_loading: true,
                get_userData_error: false,
            }
        case getUserDataAction.get_userData_success:
            return {
                ...state,
                get_userData_loading: true,
                get_userData_data: action.payload,
                get_userData_error:false,
            }
        case getUserDataAction.get_userData_failure:
            return {
                ...state,
                get_userData_loading: false,
                get_userData_error:action.payload,
            }
        default:
            return state;
    }
}