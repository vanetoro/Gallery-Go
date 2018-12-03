import React, {Component} from 'react'
import $ from "jquery";
import Galleries from '../components/galleries'
import Exhibit from '../components/exhibit'
import {BrowserRouter as Router,Route} from 'react-router-dom'


class Main extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        //need to figure out cors errors
        $.get({
                url: 'http://www.nyartbeat.com/list/event_mostpopular.en.xml',
                dataType: "text xml"
            })
            .done(xmlData => {
                let events = xmlData.getElementsByTagName('Event')
                let eventsArray = []
                for (var i = 1; i < events.length; i++) {
                    eventsArray.push({
                        id: i,
                        eventName: events[i].getElementsByTagName('Name')[0].textContent,
                        eventDescription: events[i].getElementsByTagName('Description')[0].textContent,
                        venueName: events[i].getElementsByTagName('Venue')[0].getElementsByTagName('Name')[0].textContent,
                        venueAddress: events[i].getElementsByTagName('Venue')[0].getElementsByTagName('Address')[0].textContent,
                        DateStart: events[i].getElementsByTagName('DateStart')[0].textContent,
                        DateEnd: events[i].getElementsByTagName('DateEnd')[0].textContent,
                        imageUrl: events[i].getElementsByTagName('Image')[2].outerHTML.match(/\bhttp\S+/)[0].slice(0, -1)
                        
                    })
                    
                }
                this.setState({
                    events: eventsArray
                })
                // this.populateLocalStorage()
                localStorage.setItem(i, JSON.stringify(eventsArray[i -1]));
            });
    }

    // populateLocalStorage(){
    //     for(let i = 1; i<this.state.events; i++){
    //         localStorage.setItem(i, JSON.stringify(this.state.events[i]));
    //     }
    // }

   

    render() {
        return (
            <>
                <Router>
                    <div>
                        <div id="content" className="p-0 bg-white">
                            <Route exact path="/" render={ ()=> < Galleries events={ this.state.events } />}/> 
                        </div> 
                        <Route path="/exhibits/:name" render={ ()=> <Exhibit events={ this.state.events } />}/>
                    </div> 
                </Router> 
            </>
            )
    }
}

            export default Main