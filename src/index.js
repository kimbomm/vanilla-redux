import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  console.log("count", count);
  return count;
};

const countStore = createStore(countModifier);
console.log("countStore", countStore);
console.log("getState", countStore.getState());
