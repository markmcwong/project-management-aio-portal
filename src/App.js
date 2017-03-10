import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor(props){
    // Pass props to parent class
	    super(props);
	    // Set initial state
	    this.state = {
	      data: []
	    }
	    this.apiUrl = window.location.search.split('code=')[1]
	    if (this.apiUrl !== undefined){
	    console.log(this.apiUrl)
	    }
	}
    test = () =>{
		window.location.href = 'https://todoist.com/oauth/authorize?client_id=e37d7bbe9c4b4162a4f9bb738d7fcad9&scope=data:read,data:delete&state=secretstring';
    }
    a = () => {
		var form = new FormData();
		form.append("client_id", "e37d7bbe9c4b4162a4f9bb738d7fcad9");
		form.append("client_secret", "c25d84a7a2af4992a9b11217b2eae205");
		form.append("code", this.apiUrl);
		form.append("redirect_uri", "http://react-markmcwong.c9users.io/");
		
		axios({
		  "async": true,
		  "crossDomain": true,
		  "url": "https://thingproxy.freeboard.io/fetch/https://todoist.com/oauth/access_token",
		  "method": "POST",
		  "headers": {
		    "cache-control": "no-cache",
		    "postman-token": "9f4b496b-b219-766a-d2ee-86c2ed7afea8"
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": form
		})
    }
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
					<Button onClick={this.test}/><Button onClick={this.a}/>
				</div>
				<p className="App-intro">
					To get started, edit
					<code>src/App.js</code>
					and save to reload.
				</p>
			</div>
		);
	}

}

export default App;

