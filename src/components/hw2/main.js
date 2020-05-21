import React from 'react';

const Main = ({active, children})=> {
    return (
        <>
            {children.map((item, i) => 
                <div key={i} id={i} className={`task ${i === active ? "active" : ""}`}>
                    {item}
                </div>
            )}
        </>
    );
}

export default Main;