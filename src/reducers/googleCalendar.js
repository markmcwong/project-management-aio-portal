import request from 'superagent'

const CALENDAR_ID = 'markwongmanchun@gmail.com'
const API_KEY = 'AIzaSyD_IJUHS3-cGlQf4jexEH9YOdE1gvMccaQ'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = [] // eslint-disable-next-line
        JSON.parse(resp.text).items.map((event) => { 
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        console.log(events);
        callback(events);
        
      }
    })
}
