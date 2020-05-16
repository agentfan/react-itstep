import React from 'react';

const Cw2 = ({date})=> {
    const [time, setTime] = React.useState(date);

    setInterval(()=>{
        setTime(new Date());
    }, 1000);

    return(
        <p> {time.toString()} </p>
    );
}

export default Cw2;