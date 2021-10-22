// JSON Object
const tasks = [
  {
    "info": "Cut Grass",
    "status": false,
  },

  {
    "info": "Clean Room",
    "status": false,
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

// DOM Elements
const output = document.getElementById("output");
const taskList = document.getElementById("task-list");

// Loop in the JSON Object
const showChecklist = () => {
  for (i = 0; i < tasks.length; i++) {
    const status = tasks[i].status ? "checked" : "";
    const html = `<li> <label for="${tasks[i].info}"> ${tasks[i].info}</label>
    <input type="checkbox" id="${tasks[i].info}" ${status}>
             </li>`;
    taskList.innerHTML += html;
  }
};

const updateJSON = (e) => {
  // id of the clicked checkbox
  const info = e.target.id;
  let infoIndex;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].info == info) infoIndex = i;
  }
  const checked = e.target.checked;
  console.log(infoIndex, info, checked);
  tasks[infoIndex].status = checked;
  console.log(tasks[infoIndex]);
};

const addEvents = () => {
  const checkBoxes = document.querySelectorAll(
    '#task-list input[type = "checkbox"]'
  );
  for (const i in checkBoxes) {
    checkBoxes[i].onchange = updateJSON;
  }
};

showChecklist();
addEvents();
