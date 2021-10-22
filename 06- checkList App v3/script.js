// Global Variables:
let tasks = [];
// DOM Elements
const output = document.getElementById("output");
const taskList = document.getElementById("task-list");
const myForm = document.getElementById("myForm");

const addCheckbox = (data, key) => {
  const li = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.for = key;
  label.textContent = data.info;
  checkbox.id = key;
  checkbox.value = data.info;
  checkbox.checked = data.status;
  checkbox.setAttribute("onchange", "updateJSON()");
  li.appendChild(label);
  li.appendChild(checkbox);
  taskList.appendChild(li);
};

// Loop in the JSON Object
const buildCheckboxes = (data) => {
  for (let key in data) {
    addCheckbox(data[key], key);
  }
};

const updateJSON = () => {
  const key = event.target.id;
  tasks[key].status = event.target.checked;
  console.log(key, tasks[key]);
};

window.onload = () => {
  if (sessionStorage["task"] != null) {
    // data = sessionStorage["task"];
  } else {
    // JSON Object
    tasks = [
      {
        "info": "Cut Grass",
        "status": false,
      },

      {
        "info": "Clean Room",
        "status": true,
      },

      {
        "info": "Make Dinner",
        "status": false,
      },

      {
        "info": "Go To Gym",
        "status": false,
      },

      {
        "info": "Reply to Email",
        "status": false,
      },
    ];
  }
  buildCheckboxes(tasks);
};

const AddNewTask = (task) => {
  addCheckbox(task, tasks.length);
  tasks.push(task);
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const tempValue = document.querySelector('input[name="task"]').value;
  const newTask = { "info": tempValue, "status": false };
  tasks.push(newTask);
  AddNewTask(newTask);
  console.log(tempValue);
  console.log(tasks);
  // 1st Way
  // Clean out the dev
  // taskList.innerHTML = "";
  // buildCheckboxes(tasks);
});
