import React from 'react';
import {withRouter} from "react-router-dom";
import {Box, Paper, Link} from "@material-ui/core";

const EventsPage = (props)=> {
    const eventName = props.match.params.path;
    const {events} = props;

    const currentCategory = events.find(event => event.name === eventName);
    const currentEvents = currentCategory.events;

    const handleClick = (id)=>{
    console.log(`/${currentCategory.name}/${id}`);
      props.history.push(`/${currentCategory.name}/${id}`);
    };

    return (
        <>
            {
                currentEvents.map((event)=>{
                    return (
                        <Link key={event.id} to={`/${currentCategory.name}/${event.id}`}>
                        <Box component={Paper}>
                            <p onClick={()=>handleClick(event.id)}>{event.name}</p> 
                        </Box>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default withRouter(EventsPage);