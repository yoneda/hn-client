
const reducer = (state={},action)=>{
  if(action.type==="GET_HACKERNEWS_ITEM_SUCCESS"){
    const item = action.payload;
    const newItems = [...state.items, item]
    const newState = {
      items: newItems,
      ids: state.ids,
      isLoading: state.isLoading,
    }
    return newState;
  }
  else if(action.type==="GET_HACKERNEWS_TOPSTORIES_SUCCESS"){
    const ids = action.payload;
    const newState = {
      items: state.items,
      ids: ids,
      isLoading: state.isLoading,
    }
    return newState;
  }
  else if(action.type==="DONE_LOADING"){
    const newState = {
      items: state.items,
      ids: state.ids,
      isLoading: false,
    }
    return newState;
  }
  else if(action.type==="REMOVE_ONE_ITEM"){
    const targetId = action.payload;
    const newItems = state.items.filter((item)=>{
      if(item.id===targetId) return false;
      return true;
    })
    const newState = {
      items: newItems,
      ids: state.ids,
      isLoading: state.isLoading,
    }
    return newState;
  }
  else{
    const newState = {
      items:[],
      ids:[],
      isLoading: true,
    }
    return newState;
  }
}

export default reducer;
