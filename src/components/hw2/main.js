import React, { useState } from 'react';

const Main = ({active, onSelect, children})=> {
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