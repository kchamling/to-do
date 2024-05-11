const addBtn = document.querySelector(".group button");
const input = document.querySelector(".group input");
const toDoList = document.querySelector(".to-do-list");

addBtn.addEventListener("click", () => {
  if (input.value.length > 0) {
    const newToDo = document.createElement("li");
    newToDo.innerHTML = input.value;

    const closIcon = document.createElement("span");
    closIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    newToDo.append(closIcon);

    newToDo.addEventListener("click", () => {
      newToDo.classList.add("checked");
    });

    closIcon.addEventListener("click", () => {
      newToDo.remove();
    });

    toDoList.append(newToDo);
    input.value = "";
  }
});
