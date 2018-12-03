import React from 'react'
// import { connect } from 'react-redux'
import { withRouter} from "react-router-dom";

function Exhibit(props){
// set event based on id found at the end of the url
let event;
if(props.events.length === 0){
    event = localStorage.getItem(props.match.params.name.split('-').slice(-1)[0])
    event = JSON.parse(event)
} else {
     event = props.events[parseInt(props.match.params.name.split('-').slice(-1)[0]) -1]
}
return(
    <div id="content">
        <div className="container">
            <h2 className="title-divider">
                 <span className="font-weight-normal text-muted">{event.eventName}</span>
                <small>
                    <a href="blog.html"><i className="fa fa-arrow-left"></i> Back to Blog</a>
                </small>
            </h2>
            <div className="row">
                {/* Main Content--> */}
                <div className="col-md-9">
                    {/*  Blog post --> */}
                    <div className="row blog-post">
                        <div className="col-md-1 date-md">
                            {/*  Date desktop --> */}
                            <div className="date-wrapper"> <span className="date-m bg-primary">Jan</span> <span
                                    className="date-d">07</span>
                            </div>
                            {/*  Meta details desktop --> */}
                            <p className="text-muted text-xs"> <i className="fa fa-user"></i> <a href="#">Erin</a>
                            </p>
                        </div>
                        <div className="col-md-11">
                            <div className="media-body">
                                <div className="text-xs text-uppercase"><a href="#" className="text-primary">coding</a>
                                    / <a href="#" className="text-dark">image</a></div>
                                <h3 className="title media-heading">
                                    Eligo Letalis Quibus Valetudo Verto
                                </h3>

                                {/*  Meta details mobile --> */}
                                <ul className="list-inline meta text-muted">
                                    <li className="list-inline-item"><i className="fa fa-calendar"></i> {event.dateEnd}</li>
                                    <li className="list-inline-item"><i className="fa fa-user"></i> <a href="#">Erin</a></li>
                                </ul>

                                {/* Main content of post--> */}
                                <div className="blog-content">
                                    <div className="blog-media">
                                        <img src={event.imageUrl} alt="Picture of frog by Ben Fredericson"
                                            className="img-fluid" />
                                    </div>
                                    <p className="lead">{event.eventDescription}</p>

                                    {/* Used to highlight key points of post--> */}
                                    <div className="focus-box float-md-right col-md-6 p-3 m-3">
                                        <h5>
                                        {event.venueName}
                                        </h5>
                                        <p>{event.venueAddress}</p>
                                    </div>
                                    <p>Exerci hendrerit jus mos natu quidem secundum veniam. Amet exerci modo voco. At
                                        autem conventio hos imputo jumentum os probo sit. Abbas ea melior. Abbas ea
                                        genitus haero incassum loquor quae rusticus turpis ut. Ea eros fere letalis
                                        oppeto quibus ut.</p>
                                    <p>Abbas facilisi hendrerit luctus praesent refoveo suscipit. Abico dolor ex
                                        pertineo premo tum ymo zelus. Decet defui os paulatim pneum vicis voco. Abdo
                                        defui elit luctus paratus quae quidne. Amet eros persto pneum refero scisco
                                        vereor.</p>
                                    <h5 className="text-uppercase mt-4 mb-1">
                                        Molior Praesent Rusticus Torqueo
                                    </h5>
                                    <p>Dignissim neque patria. Gilvus pneum valde. Comis minim persto vel venio. Defui
                                        lenis meus quidem valetudo wisi. Abluo gemino lenis neo singularis tego. Hos
                                        quibus ullamcorper. Dolor importunus jumentum odio paulatim persto plaga
                                        proprius. Ea exputo genitus ille illum iusto iustum olim rusticus. Cui iaceo
                                        meus quae quia tincidunt ullamcorper vulputate.</p>
                                    <p>Brevitas immitto jumentum minim pala quidne ratis. Eros gravis jumentum rusticus
                                        suscipere venio. Cui dignissim huic in odio proprius suscipere suscipit venio
                                        vulpes. Abdo elit nimis nunc rusticus. Bene capto enim veniam.</p>

                                    {/*--Alertnative blockquote style--> */}
                                    <blockquote className="blockquote float-left">
                                        <p>Dolore laoreet sudo. Blandit eligo hendrerit ideo macto mos. Augue ea imputo
                                            refoveo utrum vindico.</p>
                                        <footer className="blockquote-footer">Enim Vulpes</footer>
                                    </blockquote>
                                    <p>Aliquip blandit cui decet facilisis magna quia venio. Abbas brevitas minim
                                        proprius refoveo scisco. Euismod imputo volutpat. Caecus ille interdico letalis
                                        ludus oppeto proprius roto sit. Aptent causa cogo genitus quibus sed. Abbas
                                        aliquam defui proprius sagaciter singularis. Autem iriure jus luctus molior
                                        secundum velit.</p>
                                    <p>Abigo facilisi gilvus inhibeo nibh pecus. Abico duis esca pala. Eros ille
                                        lucidus ludus odio oppeto persto sit tation. Brevitas cui ille iriure minim
                                        occuro turpis voco. Acsi defui esca venio zelus. Facilisi lucidus nostrud olim
                                        quadrum virtus vulpes. Adipiscing comis dolor illum iusto luptatum molior neo
                                        tamen zelus. Dolore natu pala ullamcorper.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>         

)
}

export default withRouter(Exhibit)