const changePerformanceStatus = (id, setToDoList) => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    const t = toDoList.find((item) => item.id === id);
    t.done = !t.done;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    setToDoList(toDoList);
}

export default changePerformanceStatus;