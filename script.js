(function toDoList ()  {
  // Get DOM elements
  const addTaskButton = document.getElementById("addTask");
  const newTaskInput = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");
  const lastAddedTask = document.getElementById("lastAddedTask");

  // Add event listeners
  addTaskButton.addEventListener("click", onAddTaskButtonClick);
  newTaskInput.addEventListener("keydown", onNewTaskInputKeyDown);

  /**
   * Handles the "click" event on the "addTaskButton".
   */
  function onAddTaskButtonClick() {
    const newTask = newTaskInput.value.trim();

    if (newTask) {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";
      listItem.style.border = "1px solid #ccc";
      listItem.style.marginBottom = "10px";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", onCheckboxChange);

      const taskText = document.createElement("span");
      taskText.textContent = newTask;

      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fas fa-trash-alt";
      deleteIcon.style.visibility = "hidden";
      deleteIcon.addEventListener("click", onDeleteIconClick);

      listItem.appendChild(checkbox);
      listItem.appendChild(taskText);
      listItem.appendChild(deleteIcon);
      taskList.appendChild(listItem);

      // Display the task added below the "Add Task" button
      lastAddedTask.textContent = `Task added: ${newTask}`;
      lastAddedTask.marginBottom = "10px";
      newTaskInput.value = "";
    }
  }

  /**
   * Handles the "keydown" event on the "newTaskInput".
   *
   * @param {KeyboardEvent} e
   */
  function onNewTaskInputKeyDown(e) {
    if (e.key === "Enter") {
      addTaskButton.click();
    }
  }

  /**
   * Handles the "change" event on the checkbox.
   */
  function onCheckboxChange() {
    const listItem = this.parentElement;
    const deleteIcon = listItem.querySelector(".fas.fa-trash-alt");

    if (this.checked) {
      deleteIcon.style.visibility = "visible";
    } else {
      deleteIcon.style.visibility = "hidden";
    }
  }

  /**
   * Handles the "click" event on the delete icon.
   */
  function onDeleteIconClick() {
    const listItem = this.parentElement;
    const checkbox = listItem.querySelector("input[type=checkbox]");

    if (checkbox.checked) {
      listItem.remove();
    }
  }
})();