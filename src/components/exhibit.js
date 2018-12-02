import React from 'react'
// import { connect } from 'react-redux'
import { withRouter} from "react-router-dom";

function Exhibit(props){
    // set event based on id found at the end of the url
    let event = props.events[parseInt(props.match.params.name.split('-').slice(-1)[0]) -1]

    return(

        <div>
            <img src={event.imgUrl}/>
            <h1>{event.eventName}</h1>
            {event.eventDescription}
        
        
        </div>
    )
}

export default withRouter(Exhibit)