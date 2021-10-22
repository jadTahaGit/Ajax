// JSON Object
const data = {
  "tasks": {
    "Cut Grass": false,
    "Clean Room": true,
    "Go To Gym": false,
    "Make Dinner": false,
  },
};

// DOM Elements
const output = document.getElementById("output");
const taskList = document.getElementById("task-list");

// Loop in the JSON Object
const showChecklist = () => {
  for (const key in data.tasks) {
    // console.log(key, data.tasks[key]);
    const status = data.tasks[key] ? "checked" : "";
    const html = `<li> <label id="${key}"> ${key}</label>
             <input type="checkbox" id="${key}" ${status}>
             </li>`;
    taskList.innerHTML += html;
  }
  // console.log(data);
};

const updateJSON = (e) => {
  // id of the clicked checkbox
  const key = e.target.id;
  const checked = e.target.checked;
  console.log(key, checked);
  data["tasks"][key] = checked;
  console.log(data);
};

const addEvents = () => {
  const checkBoxes = document.querySelectorAll(
    '#task-list input[type = "checkbox"]'
  );
  for (const i in checkBoxes) {
    checkBoxes[i].onchange = updateJSON;
  }
  // console.log(checkBoxes);
};

showChecklist();
addEvents();
