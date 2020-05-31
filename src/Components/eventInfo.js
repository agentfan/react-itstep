import React from 'react';
import {withRouter} from "react-router-dom";
import {Box, Paper} from "@material-ui/core";

const EventInfo = (props)=> {
    const eventName = props.match.params.category;
    const {events} = props;

    const currentCategory = events.find(event => event.name === eventName);
    const currentEvents = currentCategory.events;

    return (
        <div>
            {
                currentEvents.map((event)=>{
                    return (
                        <Box component={Paper} key={event.id}>
                            <p>{event.date}</p>
                        </Box>
                    )
                })
            }            
        </div>
    )
}

export default withRouter(EventInfo);
