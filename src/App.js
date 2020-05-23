import React, { useState } from 'react';
import setDefaultData from './utils/setDefaultData.js';
import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core/";
import ShowTask from './components/showTask.js';

const App = ({ name }) => {
  const listData = JSON.parse(localStorage.getItem("toDoList"));

  if (!listData || listData.length < 1) {
    setDefaultData();
  }

  const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem("toDoList")));

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Text</TableCell>
          <TableCell>Done</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {toDoList.map((item, i) => <ShowTask key={item.id} item={item} index={i} setToDoList={setToDoList} />)}
      </TableBody>
    </Table>
  );
}

export default App;
