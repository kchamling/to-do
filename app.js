const addBtn = document.querySelector(".input-add button");
const input = document.querySelector(".input-add input");
const toDoList = document.querySelector(".to-do-list");

showData();

addBtn.addEventListener("click", () => {
  if (input.value.length > 0) {
    const newToDo = document.createElement("div");
    newToDo.classList.add("to-do");
    newToDo.innerText = input.value;

    newToDo.addEventListener("click", () => {
      newToDo.classList.toggle("checked");
      saveData();
    });

    const closeIcon = document.createElement("span");
    closeIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    newToDo.append(closeIcon);

    closeIcon.addEventListener("click", () => {
      newToDo.remove();
      saveData();
    });

    saveData();
    toDoList.append(newToDo);
  }
});

function saveData() {
  localStorage.setItem("data", toDoList.innerHTML);
}

function showData() {
  toDoList.innerHTML = localStorage.getItem("data");
  const toDoItems = document.querySelectorAll(".to-do");
  toDoItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      saveData();
    });
    const closeIcon = item.querySelector("span");
    closeIcon.addEventListener("click", () => {
      item.remove();
      saveData();
    });
  });
}
