import axios from 'axios';

function authorize(){
        var apiUrl = window.location.search.split('code=')[1];
        console.log(apiUrl);
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
			"code": apiUrl
		  }
		})
}
export default authorize;