import React from 'react';

const Skills = ({className, skills})=> {
    return (
        <div className={className}>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Уміння / Досягнення</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map(({id, skill},i) =>
                        <tr key={id}>
                            <td>{`${i+1}.`}</td>
                            <td>{skill}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Skills;