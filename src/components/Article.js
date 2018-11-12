import React from "react";

const Article = ({items, removeOneItem}) => {
  const titleStyle = {width:"500px"};
  const tableThStyle = {width:"100px", textAlign:"left"};
  return(
    <div>
      <table>
      <thead>
        <tr style={tableThStyle}>
          <th style={titleStyle}>title</th>
          <th>date</th>
          <th>comments</th>
          <th>points</th>
          <th>delete</th>
        </tr>
        </thead>
        <tbody>
        {
          items.map((item,index)=>{
            return(
              <tr style={tableThStyle} key={index} >
                <td>{item.title}</td>
                <td>{item.time}</td>
                <td>{item.kids!==undefined ? item.kids.length : "0"}</td>
                <td>{item.score}</td>
                <td><a href="javascript:void(0)" onClick={()=>removeOneItem(item.id)}>x</a></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Article
