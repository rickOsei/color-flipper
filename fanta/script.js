const biggie = document.getElementById("biggie");
const button = document.getElementsByClassName("btn");
const logo = document.getElementById("logo");

const src = [
  "./assets/fanta_stawberry.png",
  "./assets/fanta_berry.png",
  "./assets/fanta_grape.png",
  "./assets/fanta_green-apple.png",
  "./assets/fanta_mango.png",
];

const berry = document.getElementById("berry");
const grape = document.getElementById("grape");
const greenApple = document.getElementById("greenApple");
const mango = document.getElementById("mango");

// Adding event listener to the fanta_strawberry image
strawberry.addEventListener("click", (e) => {
  biggie.classList.add("moveAway");

  setTimeout(() => {
    biggie.src = src[0];
    biggie.classList.remove("moveAway");
    biggie.classList.add("moveIn");
    biggie.style.filter = "none";
    logo.src = "./assets/new_fanta_logo_black.png";
    logo.classList.add("rotate");

    setTimeout(() => {
      document.body.style.background = "#ff645b";
      for (element of button) {
        element.style.background = "black";
        element.style.color = "white";
      }
    }, 100);
  }, 200);
});

// Adding event listener to the fanta_berry image
berry.addEventListener("click", (e) => {
  biggie.classList.add("moveAway");

  setTimeout(() => {
    biggie.src = src[1];
    biggie.classList.remove("moveAway");
    biggie.classList.add("moveIn");
    biggie.style.filter = "none";
    logo.src = "./assets/new_fanta_logo_black.png";
    logo.classList.add("rotate");

    setTimeout(() => {
      document.body.style.background = "#61bff9";
      for (element of button) {
        element.style.background = "black";
        element.style.color = "white";
      }
    }, 100);
  }, 200);
});

// Adding event listener to the fanta_grape image
grape.addEventListener("click", (e) => {
  biggie.classList.add("moveAway");

  setTimeout(() => {
    biggie.src = src[2];
    biggie.classList.remove("moveAway");
    biggie.classList.add("moveIn");
    biggie.style.filter = "drop-shadow(-20px 20px 4px gray)";
    logo.src = "./assets/new_fanta_logo.png";
    logo.classList.add("rotate");

    setTimeout(() => {
      document.body.style.background =
        "linear-gradient(-90deg, white, rgb(168, 165, 165))";
      for (element of button) {
        element.style.background = "white";
        element.style.color = "black";
      }
    }, 100);
  }, 200);
});

// Adding event listener to the fanta_greenApple image
greenApple.addEventListener("click", (e) => {
  biggie.classList.add("moveAway");

  setTimeout(() => {
    biggie.src = src[3];
    biggie.classList.remove("moveAway");
    biggie.classList.add("moveIn");
    biggie.style.filter = "none";
    logo.src = "./assets/new_fanta_logo_black.png";
    logo.classList.add("rotate");

    setTimeout(() => {
      document.body.style.background = "#bbfa7c";
      for (element of button) {
        element.style.background = "black";
        element.style.color = "white";
      }
    }, 100);
  }, 200);
});

// Adding event listener to the fanta_mango image
mango.addEventListener("click", (e) => {
  biggie.classList.add("moveAway");

  setTimeout(() => {
    biggie.src = src[4];
    biggie.classList.remove("moveAway");
    biggie.classList.add("moveIn");
    biggie.style.filter = "none";
    logo.src = "./assets/new_fanta_logo_black.png";
    logo.classList.add("rotate");

    setTimeout(() => {
      document.body.style.background = "#fac57c";
      for (element of button) {
        element.style.background = "black";
        element.style.color = "white";
      }
    }, 100);
  }, 200);
});

// strawberry animation start and end
strawberry.addEventListener("animationend", () => {
  biggie.classList.remove("moveIn");
  logo.classList.remove("rotate");
});

// strawberry.addEventListener("animationstart", () => {
//   biggie.classList.add("moveIn");
//   logo.classList.add("rotate");
// });

// berry animation start and end
berry.addEventListener("animationend", () => {
  biggie.classList.remove("moveIn");
  logo.classList.remove("rotate");
});

// berry.addEventListener("animationstart", () => {
//   biggie.classList.add("moveIn");
//   logo.classList.add("rotate");
// });

// grape animation start and end
grape.addEventListener("animationend", () => {
  biggie.classList.remove("moveIn");
  logo.classList.remove("rotate");
});

// grape.addEventListener("animationstart", () => {
//   biggie.classList.add("moveIn");
//   logo.classList.add("rotate");
// });

// greenApple animation start and end
greenApple.addEventListener("animationend", () => {
  biggie.classList.remove("moveIn");
  logo.classList.remove("rotate");
});

// greenApple.addEventListener("animationstart", () => {
//   biggie.classList.add("moveIn");
//   logo.classList.add("rotate");
// });

// Mango animation start and end
mango.addEventListener("animationend", () => {
  biggie.classList.remove("moveIn");
  logo.classList.remove("rotate");
});

// greenApple.addEventListener("animationstart", () => {
//   biggie.classList.add("moveIn");
//   logo.classList.add("rotate");
// });

logo.addEventListener("click", () => {
  window.location.reload();
});
