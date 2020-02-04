// selectors
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// constants
const TODOS_LS = "toDos";

// 할 일 목록 리스트
let toDos = [];

function deleteToDo() {
  const btn = event.target;
  const li = btn.parentNode;
  // html의 해당 li 삭제
  toDoList.removeChild(li);

  // 새로운 toDo로 교체 (id도 다시 넘버링)
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

// 로컬에 데이터를 저장하는 함수
function saveToDos() {
  // object -> string
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 할 일을 추가하는 함수
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button"); // 삭제 버튼
  const span = document.createElement("span"); // 할 일 텍스트
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  // html 구조 만들어주기
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  // toDos에 넣을 객체
  const toDoObj = {
    text: text,
    id: newId
  };

  toDos.push(toDoObj); // 리스트에 추가
  saveToDos(); // 추가된 리스트를 로컬에 저장
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  // submit하면 삭제
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    // string -> object
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
      console.log(toDo);
    });
  }
}

function init() {
  // loading
  loadToDos();

  // handle a submit event
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
