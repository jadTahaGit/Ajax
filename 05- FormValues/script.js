const myForm = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

const output = (x) => {
  outputDiv.innerHTML = x;
};

const objectToList = (obj) => {
  let list = "<ul>";

  for (const el in obj) {
    list += `<li>${el}: ${obj[el]} </li>`;
    // Put the Keys in an array:
    objKeys = Object.keys(obj);
    if (el == objKeys[objKeys.length - 1]) {
      list += `</ul>`;
    }
  }

  return list;
};

const collectData = () => {
  const el = myForm.querySelectorAll('input[type="text"]');

  //   console.log(el);

  let myData = {};

  for (let i = 0; i < el.length; i++) {
    let elName = el[i].name;
    let elValue = el[i].value;
    // console.log(elName, elValue);

    myData[elName] = elValue;
  }
  //   console.log(myData);
  return myData;
};

const reset = () => {
  outputDiv.innerHTML = "";
  let el = myForm.querySelectorAll('input[type = "text"]');
  for (let i = 0; i < el.length; i++) {
    // console.log(el[i].value);
    el[i].value = "";
  }
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = collectData();
  data = objectToList(data);
  output(data);
});

myForm.addEventListener("reset", (e) => {
  e.preventDefault();
  reset();
});
