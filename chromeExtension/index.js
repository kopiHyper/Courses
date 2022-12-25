const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("u-list");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("save-btn");

let myLeads = [];

//Save Tab function that saves the current tab from the browser to the local storage and render it.
tabBtn.addEventListener("click", function () {
  //Getting the current tab from the browser
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
});

//Getting elements form localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

//Assigning them to myLeads array and rendering them
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

//Saving elements in localStorage form the input element
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads(myLeads);
});

//Deleting all elements on double click
delBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

//->Rendering elements in DOM
function renderLeads(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    listItem += `
    <li>
        <a target='_blank' href='${leads[i]}'> ${leads[i]} </a>
    </li>`;
  }

  ulEl.innerHTML = listItem;
}
//<-
