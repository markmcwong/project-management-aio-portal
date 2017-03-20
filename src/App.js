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
		window.location.href = 'https://www.wunderlist.com/oauth/authorize?client_id=518dd73af2d377583d18&redirect_uri=https://react-markmcwong.c9users.io/oauth2/callback&state=RANDOM';
    }
    a = () => {
		var form = new FormData();
		form.append("client_id", "518dd73af2d377583d18");
		form.append("client_secret", "51a19ee8540b5eb840d4ddb4870bcb3a03cc49ac3754aa69800f64299a26");
		form.append("code", this.apiUrl);
		//form.append("redirect_uri", "http://react-markmcwong.c9users.io/");
		for (var pair of form.entries()) {
    		console.log(pair[0]+ ', ' + pair[1]); 
		}
		axios({
		  "async": true,
		  "crossDomain": true,
		  "url": "https://thingproxy.freeboard.io/fetch/https://www.wunderlist.com/oauth/access_token",
		  "method": "POST",
		  "headers": {
		    "cache-control": "no-cache",
		    "postman-token": "9f4b496b-b219-766a-d2ee-86c2ed7afea8",
		    "Content-Type": "application/json"
		  },
		  "processData": false,
		  "contentType": "application/json",
		  "mimeType": "multipart/form-data",
		  "data": {
			"client_id": "518dd73af2d377583d18",
			"client_secret": "51a19ee8540b5eb840d4ddb4870bcb3a03cc49ac3754aa69800f64299a26",
			"code": this.apiUrl
		  }
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

