import { createPostPopAction } from "./actionType";

const initState = {
    create_post_pop:false,
    create_post_title:"Create a post",
    image_preview_image:null,
    image_preview_div: false,
    image_preview_botton_div:false,
}

export const componentReducer = (state=initState, action) => {
    switch (action.type) {
        case createPostPopAction.create_post_pop_mount:
            return {
                ...state,
                create_post_pop:true,
            }
        case createPostPopAction.create_post_pop_unmount:
            return {
                ...state,
                create_post_pop: false,
            }
        case createPostPopAction.create_post_title_mount:
            return {
                ...state,
                create_post_title:action.payload,
            }
        case createPostPopAction.create_post_title_unmount:
            return {
                ...state,
                create_post_title: "",
            }
        case createPostPopAction.image_preview_image_mount:
            return {
                ...state,
                image_preview_image: action.payload,
            }
        case createPostPopAction.image_preview_image_unmount:
            return {
                ...state,
                image_preview_image: null,
            }
        case createPostPopAction.image_preview_mount:
            return {
                ...state,
                image_preview_div:true,
            }
        case createPostPopAction.image_preview_unmount:
            return {
                ...state,
                image_preview_div:false,
            }
        case createPostPopAction.image_preview_botton_div_mount:
            return {
                ...state,
                image_preview_botton_div:true,

            }
        case createPostPopAction.image_preview_botton_div_unmount:
            return {
                ...state,
                image_preview_botton_div:false,
            }
        default:
            return state;
    }
}