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
            <div>
                <div className='title'>{this.props.event.eventName}</div>
                <div className={ classes }>Description: {this.props.event.eventDescription} 
                </div>
                <a href='#' onClick={this.toggleClass}>{this.state.active ? 'Show More' : "Show Less"}</a><br />
                Venue: {this.props.event.venueName} @ {this.props.event.venueAddress}
            </div>
        )
    }
}
export default Gallery
