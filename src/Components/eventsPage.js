import React from 'react';
import {withRouter} from "react-router-dom";

const EventsPage = (props)=> {
    const eventName = props.match.params.path;
    const {events} = props;

    return (
        <>
            11111111
        </>
    )
}

export default withRouter(EventsPage);