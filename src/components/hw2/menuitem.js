import React from 'react';

const MenuItem = ({id, active, click, children})=> {
    if(id === active) {
        return <li className="active" onClick={()=>click(id)}>{children}</li>;
    }
    else {
        return <li onClick={()=>click(id)}>{children}</li>;
    }
}

export default MenuItem;