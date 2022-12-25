const randomItem = () => {
  const items = [
    "green",
    "red",
    "rgb(255, 65, 13)",
    "#2134b3",
    "rgb(233,45,123)",
  ];
  let genItem = items[Math.floor(Math.random() * items.length)];

  document.body.style.backgroundColor = genItem;
  document.getElementById("color").innerHTML = genItem;
};

color_change.addEventListener("click", randomItem);
