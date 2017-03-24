import axios from 'axios';
export function fetchCalendar(callback){
axios({
  "async": true,
  "crossDomain": true,
  "url": "https://www.googleapis.com/calendar/v3/calendars/markwongmanchun@gmail.com/events",
  "method": "GET",
  "headers": {
    "authorization": "Bearer ya29.GlwYBMFU5YpZDUt-QtCN-h1RD0nKI3Z8XDG1nfgAxYlSAmpKM9qYXwFkwrGeNXWSUSRlEHTRib1Ulg2l2e9DDvR1bR85LHWL_UNq0_ZfGz_0s-awd4HsScU66KXOag",
    "cache-control": "no-cache",
    "postman-token": "0047e1e4-2ad9-29b6-d2a8-478e3c23793b"
  }
}).then(function(response) {
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