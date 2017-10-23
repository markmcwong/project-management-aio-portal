import axios from 'axios';
import moment from 'moment'
export function fetchCalendar(callback){
axios({
  "async": true,
  "crossDomain": true,
  "url": "https://www.googleapis.com/calendar/v3/calendars/markwongmanchun@gmail.com/events",
  "method": "GET",
  "headers": {
    "authorization": "Bearer ya29.GlwZBBHOSWPDaDFGVG1J-T6szk6SEVXL7vjTYQzjRjVYidSOrtEPjgNZ-5BVPDLn4MfRAnCgOKNnt4hQI-NdhNTrZb6FQb7wEBm_ITox9VZ_ZEGXtqHPjl-Om1YUCg"
,
    "cache-control": "no-cache",
    "postman-token": "0047e1e4-2ad9-29b6-d2a8-478e3c23793b"
  }
}).then(function(response) {
    const events = []// eslint-disable-next-line
    response.data.items.map((event) => { 
      var a = moment(event.start.date);
      var b = moment(event.end.date);
      if(b.diff(a, 'days') === 1){
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.start.date || event.start.dateTime,
          allDay: true,
          title: event.summary,
        })
      }else{
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        })
      }
    })
    callback(events);
});
}