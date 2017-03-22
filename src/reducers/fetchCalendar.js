import axios from 'axios';
export function fetchCalendar(callback){
  console.log(store.getState());

axios({
  "async": true,
  "crossDomain": true,
  "url": "https://www.googleapis.com/calendar/v3/calendars/markwongmanchun@gmail.com/events",
  "method": "GET",
  "headers": {
    "authorization": "Bearer ya29.GlwWBFxv39DPBfsAWi64N7cEgmT8s5u5RAZ5saH28pVjXC0ziNxaB5OoNgDr-vrECrllO8ZK0Fe2As1EMlObNmy79kC19sLcq2WhCqfEy3ZMIQSyo1hNxTz8fYnaIA",
    "cache-control": "no-cache",
    "postman-token": "0047e1e4-2ad9-29b6-d2a8-478e3c23793b"
  }
}).then(function(response) {
    console.log(response.data);
    const events = []// eslint-disable-next-line
    response.data.items.map((event) => { 
      events.push({
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        title: event.summary,
      })
    })
    callback(events);
});
}