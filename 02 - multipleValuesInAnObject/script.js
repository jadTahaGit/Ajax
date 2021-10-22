const output = document.getElementById("output");

const friends = {
  Majd: {
    firstName: "Majd",
    lastName: "Dhainy",
  },
  Sarah: {
    firstName: "Sarah",
    lastName: "Reinthaler",
  },
  Jad: {
    firstName: "Jad",
    lastName: "Taha",
  },
  Philip: {
    firstName: "Philip",
    lastName: "Mercel",
  },
};

let number = 0;
for (let friend in friends) {
  // console.log(friend);
  // output.innerHTML += friend + "<br>";
  number++;
  // output.innerHTML += ` ${number}. ${friend}  <br>`;
  output.innerHTML += ` ${number}. ${friends[friend].firstName} ${friends[friend].lastName}   <br><br>`;
}
