import { connect } from "react-redux";
import { Dispatch } from "redux";

import { AppState } from "../../core/reducers";
import { getPosts } from "../../core/actionCreators";
import { PostsAction } from "../../core/actionTypes";
import PostsComponent from "./Posts.component";

const mapStateToProps = (state: AppState) => {
    return {
      posts: state.posts.posts,
      isLoading: state.posts.loading,
      error: state.posts.error
    };
};

const mapDispatchToProps = (dispatch: Dispatch<PostsAction>) => ({
  getPosts: () => {
    dispatch(getPosts());
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsComponent);
