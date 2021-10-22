const myForm = document.getElementById("myForm");

window.onload = () => {
  if (sessionStorage["person"]) {
    var data = JSON.parse(sessionStorage["person"]);
    var message = `Welcome ${data.first} ${data.last} to this Site`;
    document.getElementById("output").innerHTML = message;
    console.log(data);
  }
};

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // var data = formData(myForm);
  var data = JSON.stringify(formData(myForm));
  // Store it:
  if (data) {
    sessionStorage["person"] = data;
  }
  console.log(data);
});

const formData = (form) => {
  let el = form.querySelectorAll('input[type="text"]');
  let myData = {};
  for (let i = 0; i < el.length; i++) {
    let theName = el[i].name;
    let value = el[i].value;
    // console.log(theName + ": " + value);
    myData[theName] = value;
  }

  // return el;
  return myData;
};
