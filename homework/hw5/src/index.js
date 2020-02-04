// Please see this in wide screen!
// 꼭 넓은 화면에서 봐주세요!

// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// selectors
const form = document.querySelector(".js-toDoForm"),
  input = form.querySelector("input"),
  pendingToDo = document.querySelector(".js-pending__list"),
  finishedToDo = document.querySelector(".js-finished__list");

// constants
const PENDING_LS = "PENDING",
  FINISHED_LS = "FINISHED";

// variables
let pendingList = [],
  finishedList = [];
let idCount = 0;

//functions
// update localStorage
function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingList));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedList));
}

// switch each other
function switchToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const text = li.querySelector("span").innerText;
  const isFinished = li.classList.contains("finished");

  // delete li
  deleteToDo(event);
  // if li is in finished
  if (isFinished) {
    // add to pending
    paintToDo(text, false);
    // if li is in pending
  } else {
    // add to finished
    paintToDo(text, true);
  }

  // update localStorage
  saveToDos();
}

// delete li tag and also local Storage
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  if (li.classList.contains("finished")) {
    finishedToDo.removeChild(li);
    const tempList = finishedList.filter(function(e) {
      return e.id !== parseInt(li.id);
    });
    finishedList = tempList;
  } else if (li.classList.contains("pending")) {
    pendingToDo.removeChild(li);
    const tempList = pendingList.filter(function(e) {
      return e.id !== parseInt(li.id);
    });
    pendingList = tempList;
  }

  // update localStorage
  saveToDos();
}

// generate unique id
function genUniqueId() {
  return idCount++;
}

function paintToDo(text, isFinished) {
  // html tags definition
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const switchBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = genUniqueId();

  // html tags attributes setting
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  if (isFinished) {
    switchBtn.innerText = "⏪";
  } else {
    switchBtn.innerText = "✅";
  }
  switchBtn.addEventListener("click", switchToDo);
  span.innerText = text;

  // structuring html tags
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(switchBtn);
  li.id = newId;

  if (isFinished) {
    li.classList.add("finished");
    finishedToDo.appendChild(li);
  } else {
    li.classList.add("pending");
    pendingToDo.appendChild(li);
  }

  // object definition to push
  const objTemplate = {
    text: text,
    id: newId,
    status: isFinished
  };

  if (isFinished) {
    finishedList.push(objTemplate);
  } else {
    pendingList.push(objTemplate);
  }

  // update localStorage
  saveToDos();
}

// handle submit
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintToDo(currentValue, false);
  input.value = "";
}

// parse json data and paint into html
function parseAndPaint(jsonData) {
  const objData = JSON.parse(jsonData);

  objData.forEach(function(obj) {
    paintToDo(obj.text, obj.status);
  });
}

// load data and paint to html
function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS),
    loadedFinished = localStorage.getItem(FINISHED_LS);

  if (loadedPending !== null) {
    parseAndPaint(loadedPending);
  }
  if (loadedFinished !== null) {
    parseAndPaint(loadedFinished);
  }
}

function init() {
  // load data from localStorage
  loadToDos();

  // handle submit if there is input
  form.addEventListener("submit", handleSubmit);
}

init();
