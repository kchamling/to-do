const addButton = document.querySelector("#add-btn");
const input = document.querySelector("#input");
const displayContainer = document.querySelector(".display-container");

addButton.addEventListener("click", () => {
  const newToDo = document.createElement("li");
  newToDo.innerText = input.value;
  displayContainer.append(newToDo);

  const closeIcon = document.createElement("span");
  closeIcon.innerText = "🗙";
  newToDo.append(closeIcon);

  closeIcon.addEventListener("click", () => {
    newToDo.remove();
  });
});
