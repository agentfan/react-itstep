const deletePlan = (id, setToDoList) => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    const t = toDoList.find((item) => item.id === id);
    toDoList.splice(t,1);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    setToDoList(toDoList);
}

export default deletePlan;