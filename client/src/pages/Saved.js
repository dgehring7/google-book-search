import React, { Component } from "react";
import API from "../utils/api";
import List from "../components/SearchList"

class Saved extends Component {
  state = {
    books: [],
    button: "Remove"
  };

    didGet() {
    API.getBooks()
        .then(res => this.setState({ books: res.data }))
        .catch(err => console.log(err))
  }

  handleDelete = event => {
    event.preventDefault()
    API.deleteBook(event.target.value)
      .then(res => this.didGet())
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <h2>Your Saved Books:</h2>
        <List
        books={this.state.books}
        handleDelete={this.handleDelete}
        button={this.state.button}
        />
      </div>
    )
  }
}

export default Saved;