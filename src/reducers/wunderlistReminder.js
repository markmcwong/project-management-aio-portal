import axios from 'axios';
import moment from 'moment';

export function wunderlistReminder (callback){
var array = []
var count = 0
const events = []
axios({
  "async": true,
  "crossDomain": true,
  "url": "https://thingproxy.freeboard.io/fetch/https://a.wunderlist.com/api/v1/reminders?list_id=193864787",
  "method": "GET",
  "headers": {
    "x-access-token": "5d7ea3e55c1b89c6fbf78becc7ed87967ffbbb9fbe32afbbc38822919944",
    "x-client-id": "518dd73af2d377583d18",
    "cache-control": "no-cache",
    "postman-token": "b79b5282-0235-bbf3-009e-6d1fad5f367c"
  }
}).then(function(answer) {
    
    answer.data.forEach((value, index, object) => {
      axios({
        "async": true,
        "crossDomain": true,
        "url": `https://thingproxy.freeboard.io/fetch/https://a.wunderlist.com/api/v1/tasks/${value.task_id}`,
        "method": "GET",
        "headers": {
          "x-access-token": "5d7ea3e55c1b89c6fbf78becc7ed87967ffbbb9fbe32afbbc38822919944",
          "x-client-id": "518dd73af2d377583d18",
          "cache-control": "no-cache",
          "postman-token": "b79b5282-0235-bbf3-009e-6d1fad5f367c"
        }
      }).then(function(response) {
        array.push(response.data.title)
        count++;
        if(count === object.length) {
        // eslint-disable-next-line
          answer.data.map(function(event, i){ 
            var test = moment(event.date).add(1, "hours").format().slice(0,-6);
            test += ".000Z";
            events.push({
              start: moment(event.date).toDate(),
              end: moment(test).subtract("4","hours").toDate(),
              title: array[i],
            })
          })
        } 
      })
    })
    callback(events);
  })
}