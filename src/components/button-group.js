import React from 'react';
import {
	Button
}
from 'react-bootstrap';
import authorize from '../reducers/authorize.js';
import wunderlistClick from '../reducers/wunderlistClick.js';

const ButtonGroup = () => (
    <div>
        <Button onClick={wunderlistClick}>Wunderlist</Button>
        <Button onClick={authorize}>Authorize</Button>
        <Button>Fetch</Button>
    </div>
)

export default ButtonGroup