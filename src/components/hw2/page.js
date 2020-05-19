import React from 'react';

const Page = ({id, active, children})=> {
    if(id === active) {
        return <div className="task active">{children}</div>;
    }
    else {
        return <div className="task">{children}</div>;
    }
}

export default Page;