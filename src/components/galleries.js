import React from 'react'
import Gallery from './gallery'

function Galleries(props) {
   
   const exhibits = () => { if(props.events === undefined){
        return <div>Loading..</div>
    } else{ 
        return props.events.map(event =>  <Gallery event={event}/> )
    }}
    return (
        <div className="container py-4 py-lg-5">
            <h3 className="text-uppercase text-letter-spacing-sm my-0 text-primary font-weight-bold">
                Most Popular 
            </h3>
            <hr className="mt-2 mb-3" />
            <div className="row">
            <div className="card-columns">
                    {exhibits()}
                    
            </div>
        </div>
    </div>   
        
    )
}

export default Galleries
