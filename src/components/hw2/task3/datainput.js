import React from 'react';

const DataInput = ({name, text, change})=> {
    return (
        <div class="data-input">
            <div>{`${name}:`}</div>
            <div>
                <input type="text" onChange={(e)=>{change(e)}} value={text}/>
            </div>
        </div>
    );
}

export default DataInput;