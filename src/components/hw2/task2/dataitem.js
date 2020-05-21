import React from 'react';

const DataItem = ({name, text})=> {
    return (
        <div class="data-item">
            <div>{`${name}:`}</div>
            <div>{text}</div>
        </div>
    );
}

export default DataItem;