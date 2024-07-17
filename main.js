const taskInput = document.querySelector(".task-input input");
const taskBox = document.querySelector(".task-box");
const selectFilters = document.querySelector(".filter select");
const emptyImage = document.querySelector(".empty-image");
const addButton = document.querySelector(".add-button");
const resetButton = document.querySelector(".reset-button");

let editId;
let isEditedTask = false;
let todos = JSON.parse(localStorage.getItem("todo-list")) || [];
let currentFilter = "all"; // Add this variable to store the current filter

function handleAddTask() {
  let userTask = taskInput.value.trim();
  if (userTask) {
    if (!isEditedTask) {
      // if todos isn't exist, pass am empty array to todos
      if (!todos) {
        todos = [];
      }
      let taskInfo = { name: userTask, status: "pending" };
      todos.push(taskInfo);
    } else {
      isEditedTask = false;
      todos[editId].name = userTask;
      addButton.textContent = "Add"; // Change the content of the "Save" button to "Add"
    }
    taskInput.value = "";
    // let taskInfo = { name: userTask, status: 'pending' };
    // todos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo();
  }
}

addButton.addEventListener("click", handleAddTask);

taskInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    handleAddTask();
  }
});

resetButton.addEventListener("click", () => {
  taskInput.value = "";
  isEditedTask = false; // When Cancel is pressed, reset isEditedTask to false
  addButton.textContent = "Add"; // Change the content of the "Save" button to "Add".
});
