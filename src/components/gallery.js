import React, {Component} from 'react'
import '../App.css';
import { Link} from 'react-router-dom';
import { stringToSlug } from '../actions/helper';
// var classNames = require('classnames');

function Gallery(props) {

        return (
            <>
            <Link to={`/exhibits/${stringToSlug(props.event.eventName)}-${props.event.id}`}>
                <div className="card mb-4 border-0 flex-ew"   data-id={props.event.id}>
                    <img className="card-img img-fluid" data-src={props.event.imageUrl} data-toggle="blazy" />
                    <div className="card-img-overlay bg-dark bg-op-5 text-white flex-valign-b" >
                        <h5 className="card-title mb-1" >
                            <div className='title'>{props.event.eventName}</div>
                        </h5>
                        <p className="card-text text-uppercase text-white text-sm">{props.event.venueName}</p>
                    </div>    
                </div>
            </Link>
            </>
        )
}
export default Gallery
