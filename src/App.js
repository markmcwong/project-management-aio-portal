import React, {Component} from 'react';
import './App.css';
// import {getEvents} from './reducers/googleCalendar.js';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import GoogleLogin from 'react-google-login';
import ButtonGroup from './components/button-group.js';


import {fetchCalendar} from './reducers/fetchCalendar.js';
import {wunderlistReminder} from './reducers/wunderlistReminder.js'

BigCalendar.momentLocalizer(moment);

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			events: []
		}
	}
	 componentDidMount () {
	    wunderlistReminder((events) => {
	    	console.log({events})
			this.setState({events})
		    fetchCalendar((events) => {
			    var slice = this.state.events;
			    console.log(slice)
			    var concat = events.concat(slice)
			    console.log(concat);
			    this.setState({events: [concat]});
			    console.log(this.state)
		    })
	    })
	}
	render() {
		return (
			<div className="App">
					<GoogleLogin clientId="184159553523-l0lc3prs60d1njpksrreom332ui9ce0k.apps.googleusercontent.com" offline={true} buttonText="test" scope="https://www.googleapis.com/auth/calendar.readonly"/>
					<ButtonGroup/>
				    <BigCalendar selectable defaultView='week' events={this.state.events}/> 
			</div>
		);
	}

}
export default App;
