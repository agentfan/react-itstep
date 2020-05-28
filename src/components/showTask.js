import React, { useState } from 'react';
import {TableRow, TableCell, Checkbox, Input, makeStyles} from "@material-ui/core/";
import changePerformanceStatus from '../utils/changePerformanceStatus.js';
import changePlanText from '../utils/changePlanText.js';
import deletePlan from '../utils/deletePlan.js';

const useStyle = makeStyles({
    root: {
        '& .input': {
            width: '100%'
        },
        '& .delete': {
            width: '2rem',
            padding: '0.25rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            backgroundColor: 'rgba(255,0,0,0.25)',
            cursor: 'pointer'
        },        
        '& .delete:hover': {
            backgroundColor: 'red',
            color: 'white'
        }
    }
});

const ShowPerformance = ({state, checked}) => {
    return (
        <Checkbox
            checked={state}
            onChange={checked}
        />
    );
}

const ShowTask = ({item, index, setToDoList })=> {
    const classes = useStyle();

    const {id, text, done} = item;

    const [plan, setPlan] = useState(text);

    const handleChange = (event) => {
        changePerformanceStatus(id, setToDoList);
    }

    const handlePlanChange = (event) => {
        setPlan(event.target.value);
    }

    const handlePlanBlur = (event) => {
        changePlanText(id, plan, setToDoList);
    }

    const handleDelete = () => {
        deletePlan(id, setToDoList);
    }

    return (
        <TableRow className={classes.root}>
            <TableCell>{index+1}</TableCell>
            <TableCell>
                <Input className="input" defaultValue={plan} variant="filled" size="small" onChange={handlePlanChange} onBlur={handlePlanBlur}/>
            </TableCell>
            <TableCell><ShowPerformance state={done} checked={handleChange}/></TableCell>
            <TableCell>
                <div className="delete" onClick={handleDelete}>Del</div>
            </TableCell>
        </TableRow>
    )
}

export default ShowTask;