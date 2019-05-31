//Nav

const activeList = ["header", "header__nav"]
const buttonList = [".nav__link--home", ".nav__link--services", ".nav__link--about", ".nav__link--portfolio",
    ".nav__link--pricing", ".nav__link--blog", ".nav__link--contact"
];

document.querySelector(".header__icon-bars").addEventListener("click", function () {
    for (let i = 0; i < activeList.length; i++) {
        document.querySelector("." + activeList[i]).classList.toggle(activeList[i] + '--active');
    }
})

for (let j = 0; j < buttonList.length; j++) {
    document.querySelector(buttonList[j]).addEventListener('click', function () {
        for (let k = 0; k < activeList.length; k++) {
            document.querySelector("." + activeList[k]).classList.remove(activeList[k] + '--active');
        }
    })
}

//Portfolio
const portList = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

for (let i = 0; i < portList.length; i++) {
    document.querySelector(".portfolio__wrap__image--" + portList[i]).addEventListener("click", function () {
        document.querySelector(".portfolio__wrap__container--" + portList[i]).classList.add("portfolio__wrap__container--active")
    })
    document.querySelector(".portfolio__container__center--" + portList[i]).addEventListener("click", function () {
        document.querySelector(".portfolio__wrap__container--" + portList[i]).classList.remove("portfolio__wrap__container--active")
    })

}