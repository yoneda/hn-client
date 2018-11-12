import React from "react";
import { connect } from 'react-redux'
import Title from "../components/Title.js";
import Article from "../components/Article.js";
import { removeOneItem } from "../actions/actions.js";

const MainContainer = ({ids, items, isLoading, removeOneItem}) => {
  const title = "hacker news simple clinet"
  return(
    <div>
      <Title text={title} />
      {
        isLoading===true ?
        <p>loading...</p> :
        <Article items={items} removeOneItem={removeOneItem}/>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return(
    {
      ids: state.ids,
      items: state.items,
      isLoading: state.isLoading
    }
  )
}

const mapDispatchToProps = dispatch => {
  return(
    {
      removeOneItem : (id)=>dispatch(removeOneItem(id))
    }
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);
