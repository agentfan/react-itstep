const setDefaultData = ()=> {
    localStorage.setItem(
    "toDoList",
    JSON.stringify([
      {id: 0, text: "Learn ReactJS", done: false},  
      {id: 1, text: "Visit IT STEP", done: false},  
      {id: 2, text: "Make hw #1", done: true},  
      {id: 3, text: "Learn Angular", done: false},  
      {id: 4, text: "Learn TypeScript", done: false},  
      {id: 5, text: "Read the book", done: true},  
    ]));
}

export default setDefaultData;