import axios from 'axios';

export const getHackernewsItemSuccess = (data) => {
  return {
    type: "GET_HACKERNEWS_ITEM_SUCCESS",
    payload: data,
  }
}

export const getHackernewsTopstoriesSuccess = (data) => {
  return {
    type: "GET_HACKERNEWS_TOPSTORIES_SUCCESS",
    payload: data
  }
}

export const doneLoading = () => {
  return {
    type: "DONE_LOADING"
  }
}

export const removeOneItem = (id) => {
  return {
    type: "REMOVE_ONE_ITEM",
    payload: id
  }
}

export const getHackernewsItem = (id,callback) => {
  axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  .then(res=>{
    const action = getHackernewsItemSuccess(res.data);
    callback(action)
  })
  .catch(err=>console.log("err"))
}

export const getHackernewsTopstories = (callback) => {
  axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
  .then(res=>{
    const action = getHackernewsTopstoriesSuccess(res.data);
    callback(action)
  })
  .catch(err=>console.log(err))
}
