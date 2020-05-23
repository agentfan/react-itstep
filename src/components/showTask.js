import React, { useState } from 'react';
import {TableRow, TableCell} from "@material-ui/core/";

const ShowTask = ({item, index})=> {
    const {id, text, done} = item;

    return (
        <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{text}</TableCell>
            <TableCell>{done ? "done" : "not done"}</TableCell>
            <TableCell>Del</TableCell>
        </TableRow>
    )
}

export default ShowTask;