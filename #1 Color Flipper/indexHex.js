const changeColor = () => {
  let color = document.getElementById("color");
  let colorRan = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + colorRan;
  color.innerHTML = "#" + colorRan;
};

color_change.addEventListener("click", changeColor);
