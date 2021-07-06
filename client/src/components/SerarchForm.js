import React from "react";

const SearchForm = props => {
  return (
      <form>  
        <legend>Google Book Search</legend>
          <label htmlFor="searchBook" className="form-label">Search</label>
          <input type="text" id="searchBook" className="form-control"
          value={props.query} onChange={props.handleInputChange}/>
          <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleSubmit}>
              Enter
          </button>
      </form>
  )
}

export default SearchForm;