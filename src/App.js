import React from 'react';
import './App.css';
import { StoreContext } from "./utils/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EventsPage from "./Components/eventsPage";
import EventInfo from "./Components/eventInfo";

const App = () => {
  const {
    ["events"]: [events, setEvents],
  } = React.useContext(StoreContext);
  console.log(events);

  return (

    <div>
      <Router>
        <nav>
          {
            events.map((event) => {
              return <p key={event.id}>
                <Link to={`/${event.name}`}>{event.name}</Link> </p>
            })
          }
        </nav>
        <Switch>
          <Route path="/:category/:eventId">
            <EventInfo events={events}/>
          </Route>         
          <Route path="/:path">
            <EventsPage events={events}/>
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </div>

  )
}
export default App