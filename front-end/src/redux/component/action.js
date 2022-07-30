import { createPostPopAction } from "./actionType";


export const createPostPopMount = () => {
    return {
        type: createPostPopAction.create_post_pop_mount,
    }
}

export const createPostPopUnmount = () => {
    return {
        type: createPostPopAction.create_post_pop_unmount,
    }
}

export const createPostTitleMount = (data) => {
    return {
        type: createPostPopAction.create_post_title_mount,
        payload:data,
    }
}

export const createPostTitleUnmount = (data) => {
    return {
        type: createPostPopAction.create_post_title_unmount,
        payload:"",
    }
}

export const imagePreviewImageMount = (data) => {
    return {
        type: createPostPopAction.image_preview_image_mount,
        payload:data,
    }
}

export const imagePreviewImageUnMount = () => {
    return {
        type: createPostPopAction.image_preview_image_unmount,
        payload:null
    }
}

export const imagePreviewMount = () => {
    return {
        type: createPostPopAction.image_preview_mount,
    }
}

export const imagePreviewUnmount = () => {
    return {
        type: createPostPopAction.image_preview_unmount,
    }
}

export const imagePreviewBottonDivMount = () => {
    return {
        type: createPostPopAction.image_preview_botton_div_mount,

    } 
}

export const imagePreviewBottonDivUnmount = () => {
    return {
        type: createPostPopAction.image_preview_botton_div_unmount,
    }
}