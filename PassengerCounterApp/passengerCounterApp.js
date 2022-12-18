let people = 0;
let mess = "";
let paragraph = "Previous entries: ";
let counter = document.getElementById("count-el");

function increment() {
  people = people + 1;
  document.getElementById("count-el").innerText = people;
}
// Replace character on a given Index by a given character
function replaceAtIndex(_string, _index, _newValue) {
  if (_index > _string.length - 1) {
    return string;
  } else {
    return (
      _string.substring(0, _index) + _newValue + _string.substring(_index + 1)
    );
  }
}

function save() {
  mess += people + " - ";

  let ind = mess.lastIndexOf("-");
  let final_string = replaceAtIndex(mess, ind, "");

  document.getElementById("save-el").innerText = paragraph + final_string;
  people = 0;
  counter.innerText = 0;
}
