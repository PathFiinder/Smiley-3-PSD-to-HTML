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


//Scroll

const homePosTop = $('.slogan').offset().top
const servicesPosTop = $('.our-services').offset().top
const aboutPosTop = $('.media').offset().top
const portfolioPosTop = $('.portfolio').offset().top
const pricingPosTop = $('.pricing').offset().top
const blogPosTop = $('.news').offset().top
const contactPosTop = $('.updates').offset().top

function toScroll(PosTop) {
    $('body, html').animate({
        scrollTop: PosTop
    }, 1000)
    document.querySelector(".header").classList.remove("header--active")
    document.querySelector(".header__nav").classList.remove("header__nav--active")
}



document.querySelector(".nav__link--home").addEventListener('click', function () {
    toScroll(homePosTop)
});

document.querySelector(".nav__link--services").addEventListener('click', function () {
    toScroll(servicesPosTop)
});

document.querySelector(".nav__link--about").addEventListener('click', function () {
    toScroll(aboutPosTop)
});
document.querySelector(".nav__link--portfolio").addEventListener('click', function () {
    toScroll(portfolioPosTop)
});
document.querySelector(".nav__link--pricing").addEventListener('click', function () {
    toScroll(pricingPosTop)
});
document.querySelector(".nav__link--blog").addEventListener('click', function () {
    toScroll(blogPosTop)
});
document.querySelector(".nav__link--contact").addEventListener('click', function () {
    toScroll(contactPosTop)
});

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
    document.querySelector(".container__image__photo--primary").classList.add("container__image__photo--active")
    document.querySelector(".container__image__photo--secondary").classList.remove("container__image__photo--active")
    document.querySelector(".container__image__photo--tertiary").classList.remove("container__image__photo--active")
    document.querySelector(".team__member__primary").style.zIndex = 2
    document.querySelector(".team__member__secondary").style.zIndex = 1
    document.querySelector(".team__member__tertiary").style.zIndex = 0
})


document.querySelector(".team__order__circle--" + circleDivList[1]).addEventListener("click", function () {
    document.querySelector(".team__order__circle--" + circleDivList[1]).classList.add("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[2]).classList.remove("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[0]).classList.remove("team__order__circle--active")
    document.querySelector(".container__image__photo--primary").classList.remove("container__image__photo--active")
    document.querySelector(".container__image__photo--secondary").classList.add("container__image__photo--active")
    document.querySelector(".container__image__photo--tertiary").classList.remove("container__image__photo--active")
    document.querySelector(".team__member__primary").style.zIndex = 0
    document.querySelector(".team__member__secondary").style.zIndex = 2
    document.querySelector(".team__member__tertiary").style.zIndex = 1
})

document.querySelector(".team__order__circle--" + circleDivList[2]).addEventListener("click", function () {
    document.querySelector(".team__order__circle--" + circleDivList[2]).classList.add("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[0]).classList.remove("team__order__circle--active")
    document.querySelector(".team__order__circle--" + circleDivList[1]).classList.remove("team__order__circle--active")
    document.querySelector(".container__image__photo--primary").classList.remove("container__image__photo--active")
    document.querySelector(".container__image__photo--secondary").classList.remove("container__image__photo--active")
    document.querySelector(".container__image__photo--tertiary").classList.add("container__image__photo--active")
    document.querySelector(".team__member__primary").style.zIndex = 1
    document.querySelector(".team__member__secondary").style.zIndex = 0
    document.querySelector(".team__member__tertiary").style.zIndex = 2
})

//Clients

/*let rightCounter = 0
let leftCounter = 0 

document.querySelector(".comment__arrow--left").addEventListener("click",function(){
    
    document.querySelector(".clients__person__primary").style.zIndex = 0 
    document.querySelector(".clients__person__secondary").style.zIndex = 1
    
})

document.querySelector(".comment__arrow--right").addEventListener("click",function(){
    if (rightCounter == 0){
        document.querySelector(".clients__person__primary").style.zIndex = 0 
        document.querySelector(".clients__person__secondary").style.zIndex = 1
        document.querySelector(".person__comment__primary > .comment__arrow--right").classList.add("comment__arrow--no-active")
        document.querySelector(".person__comment__secondary > .comment__arrow--right").classList.remove("comment__arrow--no-active")
        document.querySelector(".person__comment__secondary > .comment__arrow--left").classList.remove("comment__arrow--no-active")
        document.querySelector(".person__comment__secondary > .comment__arrow--right").classList.add("comment__arrow--active")
        document.querySelector(".person__comment__secondary > .comment__arrow--left").classList.add("comment__arrow--active")
        console.log("c = 0")
        rightCounter++
    } else if (rightCounter == 1) {
        document.querySelector(".clients__person__secondary").style.zIndex = 0
        document.querySelector(".clients__person__tertiary").style.zIndex = 1
        document.querySelector(".person__comment__secondary > .comment__arrow--right").classList.add("comment__arrow--no-active")
        document.querySelector(".person__comment__secondary > .comment__arrow--left").classList.add("comment__arrow--no-active")
        console.log("c = 1")
        rightCounter = 0
    } 
})*/

document.querySelector(".clients__order__circle--primary").addEventListener("click", function () {
    document.querySelector(".clients__person__primary").style.zIndex = 1
    document.querySelector(".clients__person__secondary").style.zIndex = 0
    document.querySelector(".clients__person__tertiary").style.zIndex = 0
    document.querySelector(".person__comment__primary").style.zIndex = 1
    document.querySelector(".person__comment__secondary").style.zIndex = 0
    document.querySelector(".person__comment__tertiary").style.zIndex = 0
    document.querySelector(".clients__person__primary > .clients__person__photo > .person__image").classList.add("person__image--active")
    document.querySelector(".clients__person__secondary > .clients__person__photo > .person__image").classList.remove("person__image--active")
    document.querySelector(".clients__person__tertiary > .clients__person__photo > .person__image").classList.remove("person__image--active")
    document.querySelector(".clients__order__circle--primary").classList.add("clients__order__circle--active")
    document.querySelector(".clients__order__circle--secondary").classList.remove("clients__order__circle--active")
    document.querySelector(".clients__order__circle--tertiary").classList.remove("clients__order__circle--active")
})

document.querySelector(".clients__order__circle--secondary").addEventListener("click", function () {
    document.querySelector(".clients__person__primary").style.zIndex = 0
    document.querySelector(".clients__person__secondary").style.zIndex = 1
    document.querySelector(".clients__person__tertiary").style.zIndex = 0
    document.querySelector(".person__comment__primary").style.zIndex = 0
    document.querySelector(".person__comment__secondary").style.zIndex = 1
    document.querySelector(".person__comment__tertiary").style.zIndex = 0
    document.querySelector(".clients__person__primary > .clients__person__photo > .person__image").classList.remove("person__image--active")
    document.querySelector(".clients__person__secondary > .clients__person__photo > .person__image").classList.add("person__image--active")
    document.querySelector(".clients__person__tertiary > .clients__person__photo > .person__image").classList.remove("person__image--active")
    document.querySelector(".clients__order__circle--primary").classList.remove("clients__order__circle--active")
    document.querySelector(".clients__order__circle--secondary").classList.add("clients__order__circle--active")
    document.querySelector(".clients__order__circle--tertiary").classList.remove("clients__order__circle--active")
})

document.querySelector(".clients__order__circle--tertiary").addEventListener("click", function () {
    document.querySelector(".clients__person__primary").style.zIndex = 0
    document.querySelector(".clients__person__secondary").style.zIndex = 0
    document.querySelector(".clients__person__tertiary").style.zIndex = 1
    document.querySelector(".person__comment__primary").style.zIndex = 0
    document.querySelector(".person__comment__secondary").style.zIndex = 0
    document.querySelector(".person__comment__tertiary").style.zIndex = 1
    document.querySelector(".clients__person__primary > .clients__person__photo > .person__image").classList.remove("person__image--active")
    document.querySelector(".clients__person__secondary > .clients__person__photo > .person__image").classList.remove("person__image--active")
    document.querySelector(".clients__person__tertiary > .clients__person__photo > .person__image").classList.add("person__image--active")
    document.querySelector(".clients__order__circle--primary").classList.remove("clients__order__circle--active")
    document.querySelector(".clients__order__circle--secondary").classList.remove("clients__order__circle--active")
    document.querySelector(".clients__order__circle--tertiary").classList.add("clients__order__circle--active")
})

//Price
const offertList = ["basic", "standard", "professional"]
const priceList = ["primary", "secondary", "tertiary"]
for (let i = 0; i < offertList.length; i++) {
    document.querySelector(".offert__button__" + offertList[i]).addEventListener("click", function () {
        document.querySelector(".pricing__offert__price--" + priceList[i]).classList.toggle("pricing__offert__price--active")
        document.querySelector(".pricing__offert__line-hori--" + priceList[i]).classList.toggle("pricing__offert__line-hori--active")
    })
}


document.querySelector(".price__order__circle--primary").addEventListener("click", function () {
    document.querySelector(".pricing__offert--basic").style.zIndex = 1
    document.querySelector(".pricing__offert--standard").style.zIndex = 0
    document.querySelector(".pricing__offert--professional").style.zIndex = 0
    document.querySelector(".price__order__circle--primary").classList.add("price__order__circle--active")
    document.querySelector(".price__order__circle--secondary").classList.remove("price__order__circle--active")
    document.querySelector(".price__order__circle--tertiary").classList.remove("price__order__circle--active")
})

document.querySelector(".price__order__circle--secondary").addEventListener("click", function () {
    document.querySelector(".pricing__offert--basic").style.zIndex = 0
    document.querySelector(".pricing__offert--standard").style.zIndex = 1
    document.querySelector(".pricing__offert--professional").style.zIndex = 0
    document.querySelector(".price__order__circle--primary").classList.remove("price__order__circle--active")
    document.querySelector(".price__order__circle--secondary").classList.add("price__order__circle--active")
    document.querySelector(".price__order__circle--tertiary").classList.remove("price__order__circle--active")
})

document.querySelector(".price__order__circle--tertiary").addEventListener("click", function () {
    document.querySelector(".pricing__offert--basic").style.zIndex = 0
    document.querySelector(".pricing__offert--standard").style.zIndex = 0
    document.querySelector(".pricing__offert--professional").style.zIndex = 1
    document.querySelector(".price__order__circle--primary").classList.remove("price__order__circle--active")
    document.querySelector(".price__order__circle--secondary").classList.remove("price__order__circle--active")
    document.querySelector(".price__order__circle--tertiary").classList.add("price__order__circle--active")
})