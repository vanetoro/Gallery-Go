import React, { Component } from 'react'
import $ from "jquery";
import Galleries from '../components/galleries'

class Main extends Component {
     
    state = {
        events: []
    }

    componentDidMount(){
        //need to figure out cors errors
        $.ajax( {
            url: 'http://www.nyartbeat.com/list/event_mostpopular.en.xml',
            type: 'GET',
            dataType: "text xml"
        })
        .then(xmlData => {
            let events = xmlData.getElementsByTagName('Event')
            let eventsObj = []
            for(var i = 0; i< events.length; i++){
                // debugger
                eventsObj.push({
                    eventName: events[i].getElementsByTagName('Name')[0].textContent,
                    eventDescription: events[i].getElementsByTagName('Description')[0].textContent,
                    venueName: events[i].getElementsByTagName('Venue')[0].getElementsByTagName('Name')[0].textContent,
                    venueAddress: events[i].getElementsByTagName('Venue')[0].getElementsByTagName('Address')[0].textContent,
                    DateStart: events[i].getElementsByTagName('DateStart')[0].textContent,
                    DateEnd: events[i].getElementsByTagName('DateEnd')[0].textContent


            })
            }
            this.setState({events: eventsObj})
        });
        }
    
    render() {
        // debugger
        return (
            <div>
                <Galleries events={this.state.events}/>
            </div>
        )
    }
}

export default Main
