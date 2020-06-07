import * as actions from "../actionTypes";

export function setPosts(posts: Array<any>): actions.SetPostsAction {
  return {
    type: actions.SET_POSTS,
    posts
  };
}

export function getPosts(): actions.GetPostsAction {
  return {
    type: actions.GET_POSTS
  };
}

export function getPostsSuccess(
  posts: Array<any>
): actions.GetPostsSuccessAction {
  return {
    type: actions.GET_POSTS_SUCCESS,
    posts
  };
}

export function getPostsFailure(
  error: Error | string
): actions.GetPostsFailureAction {
  return {
    type: actions.GET_POSTS_FAILURE,
    error
  };
}
