const changePlanText = (id, newText, setToDoList) => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    const t = toDoList.find((item) => item.id === id);
    t.text = newText;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    setToDoList(toDoList);
}

export default changePlanText;