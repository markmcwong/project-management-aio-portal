import React from 'react';
import {
	Button
}
from 'react-bootstrap';

import authorize from '../reducers/authorize.js';

function wunderlistClick(){ 
    window.location.href = 'https://www.wunderlist.com/oauth/authorize?client_id=518dd73af2d377583d18&redirect_uri=https://react-markmcwong.c9users.io/oauth2/callback&state=RANDOM'
}

const ButtonGroup = () => (
    <div>
        <Button onClick={wunderlistClick}>Wunderlist</Button>
        <Button onClick={authorize}>Authorize</Button>
        <Button>Fetch</Button>
    </div>
)

export default ButtonGroup;