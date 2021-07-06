import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import API from "../utils/API";
import List from "../components/SearchList"


class Search extends Component {
  state = {
    query: "",
    books: [],
    error: "",
    button: "Save"
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.query)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          const bookData = res.data.items.map((item)=> {
            return {
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors,
              about: item.volumeInfo.description,
              image: item.volumeInfo.imageLinks.thumbnail,
              link: item.volumeInfo.infoLink
            }
          });
          this.setState({books: bookData, error: ""})
        }
      })
      .catch(err => this.setState({books:[], error: err.items }));
  }

  handleSave = event => {
    event.preventDefault();
    API.saveBook(event.target.value)
      .then(event.target.classList.add("disabled"))
      .catch(err => console.log(err))    
  }

  render(){
    return(
      <div>
        <SearchForm
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        />
        <List
        books={this.state.books}
        handleSave={this.handleSave}
        button={this.state.button}
        />
      </div>
    ) 
  }

}

export default Search;