import React, { useState } from 'react';
import {TableRow, TableCell, Checkbox} from "@material-ui/core/";
import changePerformanceStatus from '../utils/changePerformanceStatus.js';

const ShowPerformance = ({state, checked}) => {
    return (
        <Checkbox
            checked={state}
            onChange={checked}
        />
    );
}

const ShowTask = ({item, index, setToDoList })=> {
    const {id, text, done} = item;

    const handleChange = (event) => {
        changePerformanceStatus(item.id, setToDoList);
    }

    return (
        <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{text}</TableCell>
            <TableCell><ShowPerformance state={done} checked={handleChange}/></TableCell>
            <TableCell>Del</TableCell>
        </TableRow>
    )
}

export default ShowTask;