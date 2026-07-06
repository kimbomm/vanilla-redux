import { createStore } from "redux";

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DEL_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);
// dispatch, getState, subscribe, replaceReducer

store.subscribe(() => {
  const toDos = store.getState();
  console.log(toDos);
});

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", handleSubmit);
