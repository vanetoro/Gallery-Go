import React, {Component} from 'react'
import '../App.css';
// import { Switch } from 'react-router-dom'
var classNames = require('classnames');

function Gallery(props) {

    const handleClick = (e) => {
      e.preventDefault()
    }

        return (
            <>
            {/* <Link to="" */}
            <div className="card mb-4 border-0 flex-ew"  data-id={props.event.id} onClick={handleClick}>
                  <img className="card-img img-fluid" data-src={props.event.imageUrl} data-toggle="blazy" />
                  <div className="card-img-overlay bg-dark bg-op-5 text-white flex-valign-b" >
                      <h5 className="card-title mb-1" >
                        <div className='title'>{props.event.eventName}</div>
                      </h5>
                      <p className="card-text text-uppercase text-white text-sm">{props.event.venueName}</p>
                  </div>    
            </div>
            </>
        )
}
export default Gallery
