import React from "react";
import Card from "./Card"

// I'm not sure why the save function is not fully functional
function SaveList(props) {
  return (props.books.length === 0) ? (
    <h4>No Saved Books</h4>
  ) : 
  ( <ul>
    {props.books.map((book) => {
      return(
        <li>
          <Card
            title = {book.title}
            authors = {book.authors}
            about = {book.about}
            image = {book.image}
            link = {book.link}
            handleBtn = {props.handleDelete}
            button = {props.button}
          />
        </li>
      )
    })}
  </ul>   
  )
}

export default SaveList;