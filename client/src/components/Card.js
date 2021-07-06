import React from "react";

function Card(props) {
  return(
    <div className="card mb-3" style={{"max-width": "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"><small className="text-muted">By {props.authors}</small></p>
            <p className="card-text">{props.about}</p>
            <a href={props.link} className="d-inline card-link"><small className="text-muted">See on Google Books</small></a>
            <button className="btn btn-info save-btn" value={props.book} onClick={(event) => props.handleBtn}>{props.button}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;