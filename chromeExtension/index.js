const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("u-list");

let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

const renderLeads = () => {
  let listItem = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `
    <li>
        <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
    </li>`;
  }

  ulEl.innerHTML = listItem;
};
