// const button = document.querySelector("button");
// const body = document.getElementById("body")

// let darkMode = false;

// button.addEventListener("click", function () {
//     body.classList.toggle("first");
//     darkMode = true;
// })

const dropdown = document.querySelector(".dropdown__link");
const dropdownMenu = document.querySelector(".dropdownMenu");


dropdown.addEventListener("click", () => {
    console.log("clicked");
    dropdown.classList.toggle("activeMenu")
    dropdownMenu.classList.toggle("display")

})


// Working carousel, needs reworking, usable currently though.
const container = document.querySelector(".carousel__container")
const logos = container.querySelectorAll("img")


let carouselOne = 1
let carouselTwo = 2
let carouselThree = 3
let rightWork = true;
let leftWork = true;
// On page load, sets the carousel values
logos[0].src = `/img/logos/${carouselOne}.png`
logos[1].src = `/img/logos/${carouselTwo}.png`
logos[2].src = `/img/logos/${carouselThree}.png`

const left = document.querySelector(".left")
left.addEventListener("click", e => {
    checkNumbers(carouselOne, carouselThree)
    if (leftWork) {
        carouselOne--;
        carouselTwo--;
        carouselThree--;
        updateCarousel(carouselOne, carouselTwo, carouselThree)
    }
})
// Right Button click
const right = document.querySelector(".right")
right.addEventListener("click", e => {
    checkNumbers(carouselOne, carouselThree)
    if (rightWork) {
        carouselOne++;
        carouselTwo++;
        carouselThree++;
        updateCarousel(carouselOne, carouselTwo, carouselThree)
    }
})

function updateCarousel(one, two, three) {
    logos[0].src = `/img/logos/${one}.png`
    logos[1].src = `/img/logos/${two}.png`
    logos[2].src = `/img/logos/${three}.png`
}

function checkNumbers(one, three) {
    if (one === 1) {
        leftWork = false;
    } else leftWork = true;
    if (three === 12) {
        rightWork = false;
    }
    else rightWork = true
}


// 