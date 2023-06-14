let land = document.querySelector(".land");
for (let i = 0; i < 36; i++) {
  let cube = document.createElement("div");
  cube.className = "cube";
  land.appendChild(cube);
}

let cubes = document.querySelectorAll(".cube");
cubes[30].classList.add("blue");