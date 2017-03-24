export const FETCH_CALENDAR = 'FETCH_CALENDAR'
export const GOOGLE_AUTHORIZE = 'GOOGLE_AUTHORIZE'
export const WUNDERLIST_AUTHORIZE = 'WUNDERLIST_AUTHORIZE'

export function fetchCalendar(token) {
  return {
    type: FETCH_CALENDAR,
    isFetching: true,
    isAuthorized: true,
  }
}

function googleAuthorize(token) {
  return {
    type: GOOGLE_AUTHORIZE,
    token
  }
}

function wunderlistAuthorize(token) {
  return {
    type: WUNDERLIST_AUTHORIZE,
    token
  }
}