export const GET_POSTS = "GET_POSTS";
export interface GetPostsAction {
    type: typeof GET_POSTS;
}

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export interface GetPostsRequestAction {
    type: typeof GET_POSTS_REQUEST;
}

export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export interface GetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS;
    posts: Array<any>;
}

export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export interface GetPostsFailureAction {
    type: typeof GET_POSTS_FAILURE;
    error: Error | string;
}

export type PostsAction =
    | GetPostsAction
    | GetPostsRequestAction
    | GetPostsSuccessAction
    | GetPostsFailureAction;
