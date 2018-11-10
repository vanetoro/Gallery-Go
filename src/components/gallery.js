import React, {Component} from 'react'
import '../App.css';
var classNames = require('classnames');

class Gallery extends Component{

    state={
        active: true
    }

    toggleClass = (e) =>{
        e.preventDefault()
        this.setState({active: !this.state.active})
    }
    render(){
        let classes = classNames({'showMore': this.state.active }, 'eventDescription')

        return (
            <div className="col-12 col-lg-4 mb-4 mb-lg-1">
            <div className="card mb-4 border-0 flex-ew" data-url="https://wrapbootstrap.com/theme/appstrap-responsive-website-template-WB0C6D0H4?ref=tme">
                {/* <!-- data-url can be set to the page URL of the news item --> */}
                {/* <!-- News item 1 --> */}
                  <img className="card-img img-fluid" data-src={this.props.event.imageUrl} data-toggle="blazy" alt="Aliquam Cogo Commoveo Lucidus Magna Sagaciter Voco Vulpes Ymo"/>
                  <div className="card-img-overlay bg-dark bg-op-5 text-white flex-valign-b">
                      <h5 className="card-title mb-1">
                      <div className='title'>{this.props.event.eventName}</div>
                      </h5>
                {/* <div className={ classes }>Description: {this.props.event.eventDescription} 
                </div>
                <a href='#' onClick={this.toggleClass}>{this.state.active ? 'Show More' : "Show Less"}</a><br />
                Venue: {this.props.event.venueName} @ {this.props.event.venueAddress} */}
                </div>
            </div>
        </div>
        )
    }
}
export default Gallery
