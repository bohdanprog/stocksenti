import axios from "axios";
import moment from "moment";

const instance = axios.create({
    headers:{
      crossDomain: true,
      'Access-Control-Allow-Origin':'*'
    },
  baseURL: 'https://stocksentibackend.azurewebsites.net/',
});

let date = new Date();
let yesterday = date.setDate((date.getDate() - 1));
let yesterdayConvert = moment(yesterday).utc(true).format("YYYY-MM-DD [T] HH:MM:SS");
let currentDate = new Date();
let c = currentDate.setDate((currentDate.getDate()));
let dateTime = moment(c).format('YYYY-MM-DD HH:MM:SS');

export const instrumentsAPI = {
  entitiesConfigurationController() {
    return instance.get('entitiesconfig')
  }
}

export const googleNewsController = {
  googleNewsStream (instrument, amount = 100) {
    return instance.get(`googlenewsstream/${instrument}/${amount}`)
  },
  googleNewsFindArticleStream (title = '',instrument, limit = 100) {
    return instance.get(`googlenewsstream/getByInstrumentAndTitle/${instrument}/${title}/${limit}`)
  },
  googleNewsFilterArticleStream (articlesentiment,instrument, limit = 100) {
    return instance.get(`googlenewsstream/getByInstrumentAndArticlesentiment/${instrument}/${articlesentiment}/${limit}`)
  },
  googleNewsPeriodStream (instrument, date = yesterdayConvert) {
    return instance.get(`googlenewsperiods/${instrument}/since/${date}`)
  },
}

export const twitterNewsController = {
  twitterNewsStream (instrument, amount= 100) {
    return instance.get(`tweetsstream/${instrument}/${amount}`)
  },
  twitterNewsPeriodStream (instrument, date = yesterdayConvert) {
    return instance.get(`tweetsperiods/${instrument}/since/${date}`)
  },
}

export const stocksController = {
  stocksStream (instrument, date = new Date().toISOString()) {
    return instance.get(`stockvalue/${instrument}/since/${date}`)
  },
}

export const PostsController = {
  requestAllPosts () {
    return instance.get(`post/getPosts`)
  },
  addPost ( text,username,created= dateTime, likesCount=0, comments=[null]) {
    debugger
    return instance.post(`post/addPost`, {username,created, text, likesCount, comments})
  },
  addPostLike (postId) {
    return instance.post(`post/addLike/${postId}`, {})
  },
  removePostLike (postId) {
    return instance.post(`post/removeLike/${postId}`, {})
  },
}

export const CommentsController = {
  addComment (postId) {
    return instance.post(`comment/addComment/${postId}`, {})
  },
  addCommentLike (commentId) {
    return instance.post(`/comment/addLike/${commentId}`, {})
  },
  removeCommentLike (commentId) {
    return instance.post(`/comment/removeLike/${commentId}`, {})
  }
}