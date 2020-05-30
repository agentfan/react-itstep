import React from 'react';
import {withRouter} from "react-router-dom";
import {Box, Paper} from "@material-ui/core";

const EventInfo = (props)=> {
    console.log("hhhh");
    const eventName = props.match.params.path;
    const {events} = props;

    const currentCategory = events.find(event => event.name === eventName);
    const currentEvents = currentCategory.events;

    return (
        <>
            {
                currentEvents.map((event)=>{
                    return (
                        <Box component={Paper} key={event.id}>
                            <p>{event.date}</p>
                        </Box>
                    )
                })
            }
        </>
    )
}

export default withRouter(EventInfo);