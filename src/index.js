import React from 'react';
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux'
import App from './containers/App.js';
import reducer from "./reducers/reducer.js";
import { getHackernewsTopstories, getHackernewsItem, doneLoading} from "./actions/actions.js";
import { ITEM_MAX } from "./constants/constants.js";
import './index.css';

const store = createStore(reducer);

getHackernewsTopstories((topstoriesAction)=>{
  store.dispatch(topstoriesAction);
  const ids = store.getState().ids.splice(0,ITEM_MAX);
  const result = ids.reduce((prev,now,index,array)=>{
    getHackernewsItem(now,(itemAction)=>{
      store.dispatch(itemAction);
      if(index===(array.length-1)){
        store.dispatch(doneLoading());
      }
    })
  })
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
