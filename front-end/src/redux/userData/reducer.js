import { getUserDataAction } from "./actionType";



export const userDataReducer = (state,action) => {
    switch (action.type) {
        case getUserDataAction.get_userData_request:
            return {
                ...state,

            }
    }
}