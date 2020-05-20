import React, { useState } from 'react';

const Menu = ({active, onSelect, children})=> {
    return (
        <nav>
            <ul>
                {children.map((item, i) => 
                    <li key={i} id={i} className={i === active ? "active" : ""} onClick={()=>{onSelect(i)}}>
                        {item}
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Menu;