let land = document.querySelector(".land");
for (let i = 0; i < 36; i++) {
  let cube = document.createElement("div");
  cube.className = "cube";
  // <div class="cube"></div>
  land.appendChild(cube);
}

let cubes = document.querySelectorAll(".cube");
// it selects the 31st cube (since array indices start at 0), and adds the class "blue" to it.
cubes[30].classList.add("blue");