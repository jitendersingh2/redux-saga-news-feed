import * as actions from "../actionTypes";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostsState {
    loading: boolean;
    posts: Array<Post>;
    error: Error | string;
}

const initialState: PostsState = {
    loading: false,
    posts: [],
    error: ''
};

export default function lyricsReducer(
    state: PostsState = initialState,
    action: actions.PostsAction
): PostsState {
    switch (action.type) {
        case actions.GET_POSTS:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case actions.SET_POSTS:
        case actions.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                loading: false,
                error: ''
            };
        case actions.GET_POSTS_FAILURE:
            return {
                ...state,
                posts: [],
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}
