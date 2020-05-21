import React from 'react';

const DataTextarea = ({name, text, change})=> {
    return (
        <div class="data-textarea">
            <div>{`${name}:`}</div>
            <div>
                <textarea type="text" onChange={(e)=>{change(e)}} value={text}/>
            </div>
        </div>
    );
}

export default DataTextarea;