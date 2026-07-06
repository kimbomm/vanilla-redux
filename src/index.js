import { createStore } from "redux";

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
// dispatch, getState, subscribe, replaceReducer

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", deleteTodo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type: DEL_TODO, id });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodo(toDo);
};

form.addEventListener("submit", handleSubmit);
