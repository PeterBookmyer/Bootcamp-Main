function keydownAction(event) {
document.querySelector("#status").textContent = "KEYDOWN Event";
console.log (event.key)
}

document.addEventListener("keydown", keydownAction);


function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
