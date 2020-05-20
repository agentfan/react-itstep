import React from 'react';

const Songs = ({list})=> {
    return (
        <table className="songs">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Пісня</th>
                </tr>
            </thead>
            <tbody>
                {list.map(({id,name,duration}, i)=>{
                    return (
                    <tr key={id}>
                        <td>{`${i+1}.`}</td>
                        <td>{name}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    );
}

export default Songs;