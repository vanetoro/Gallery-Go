import React from 'react'
import Gallery from './gallery'

function Galleries(props) {
    

    return (
        <div>
        <ul>
            {props.events.map(event => <li><Gallery event={event}/></li>)}
        </ul>
        </div>
    )
}

export default Galleries
