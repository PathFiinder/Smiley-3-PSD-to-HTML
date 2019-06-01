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

//Team

const circleDivList = ["one", "two", "three"]

/*for (let i=0;i<circleDivList.length;i++){
    document.querySelector(".team__order__circle--" + circleDivList[i]).addEventListener("click",function(){
        document.querySelector(".team__order__circle--" + circleDivList[i]).classList.toggle("team__order__circle--active")
    })
}*/
document.querySelector(".team__order__circle--" + circleDivList[0]).addEventListener("click", function () {
    document.querySelector(".team__order__circle--" + circleDivList[0]).classList.add("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[1]).classList.remove("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[2]).classList.remove("team__order__circle--active")
    document.querySelector(".container__image__photo").classList.add("container__image__photo--active")
    document.querySelector(".team__member__primary").style.zIndex = 2
    document.querySelector(".team__member__secondary").style.zIndex = 1
    document.querySelector(".team__member__tertiary").style.zIndex = 0
})


document.querySelector(".team__order__circle--" + circleDivList[1]).addEventListener("click", function () {
    document.querySelector(".team__order__circle--" + circleDivList[1]).classList.add("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[2]).classList.remove("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[0]).classList.remove("team__order__circle--active")
    document.querySelector(".container__image__photo").classList.add("container__image__photo--active")
    document.querySelector(".team__member__primary").style.zIndex = 0
    document.querySelector(".team__member__secondary").style.zIndex = 2
    document.querySelector(".team__member__tertiary").style.zIndex = 1
})

document.querySelector(".team__order__circle--" + circleDivList[2]).addEventListener("click", function () {
    document.querySelector(".team__order__circle--" + circleDivList[2]).classList.add("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[0]).classList.remove("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[1]).classList.remove("team__order__circle--active")
    document.querySelector(".container__image__photo").classList.add("container__image__photo--active")
    document.querySelector(".team__member__primary").style.zIndex = 1
    document.querySelector(".team__member__secondary").style.zIndex = 0
    document.querySelector(".team__member__tertiary").style.zIndex = 2
})

//Clients




document.querySelector(".comment__arrow--left").addEventListener("click",function(){
    document.querySelector(".clients__person__primary").style.zIndex -= 2 // 0 
    document.querySelector(".clients__person__tertiary").style.zIndex += 2 //2
})