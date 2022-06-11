import {PostsType} from "../type/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./ReduxStore";
import moment from "moment";
import {PostsController} from "../api/Api";

let initialState = {
  posts: [] as Array<PostsType>,
};

export type InitialState = typeof initialState;

const postsReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'ADD_POST': {
      let newPost = {
        id:0,
        text: action.text,
        likeCount: 0,
        created: moment().fromNow(),
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        text: '',
      };
    }
    case 'GET_ALL_POSTS': {
      return {
        ...state,
        posts: action.getPosts
      };
    }
    case 'ADD_POST_LIKE': {
      return {
        ...state,
        ...state.posts,
        likeCount: action.addPostLike
      };
    }
    case 'POST_DISLIKE': {
      return {
        ...state,
        ...state.posts,
        likeCount: action.postDislike
      };
    }
    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>
//action creator
const actions = {
  addPost : (text:string) =>({ type: 'ADD_POST', text } as const),
  getAllPosts : (getPosts:PostsType) =>({ type: 'GET_ALL_POSTS', getPosts } as const),
  addPostLikeAC: (addPostLike:number) =>  ({ type: 'ADD_POST_LIKE', addPostLike } as const),
  PostDislikeAC: (postDislike:number) =>  ({ type: 'POST_DISLIKE', postDislike } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestAllPosts = (): ThunkType => {
  return async (dispatch) => {
    let response = await PostsController.requestAllPosts();
    dispatch(actions.getAllPosts(response.data));
  };
};

export const addNewPost = (username: string, text: string): ThunkType => {
  return async (dispatch) => {
    let response = await PostsController.addPost(username, text);
    dispatch(actions.getAllPosts(response.data));
  };
};

export const addLike = (postId:PostsType): ThunkType => {
  return async (dispatch) => {
    let response = await PostsController.addPostLike(postId);
    dispatch(actions.getAllPosts(response.data));
  };
};

export default postsReducer;
