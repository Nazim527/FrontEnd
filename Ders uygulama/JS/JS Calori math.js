//! Modal Window
const btn_contact = document.querySelectorAll('.btn_click')
const btn_close = document.querySelector('.modal__close')
const modal = document.querySelector('.modal')
const input = document.querySelectorAll('.modal__input')

btn_contact.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation()
        modal.style.display = 'block'
    })
})

btn_close.addEventListener("click", (e) => {
    modal.style.display = 'none'
})

 document.body.addEventListener("click", (e) => {
    if(e.target.className == 'modal') {
        modal.style.display = 'none'
    }
 })

//! Switching tabs
const tabs = document.querySelectorAll('.tab_content')
const images = document.querySelectorAll(".tabcontent")

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        tabs.forEach((otherTab) => {
            otherTab.classList.remove("tabheader__item_active")
        })
        tab.classList.add("tabheader__item_active")

        images.forEach((image) => {
            image.classList.remove('active')
        })
        images[index].classList.add('active')
    })
})

//! Image Slider
const next = document.querySelector(".offer__slider-next");
const prev = document.querySelector(".offer__slider-prev");
const current = document.querySelector("#current");
const offerImages = document.querySelectorAll(".offer__slide")

let count = 1;

next.addEventListener("click", () => {
    count++
    current.textContent = "0" + count;
    offerImages.forEach((offerImage, index) => {
        offerImage.classList.remove('active')
        let len = index + 1
        if(len == count) {
            offerImage.classList.add('active')
        }
    })

    if(count >= 4) {
        count = 0
    }
})

prev.addEventListener("click", () => {
    count--
    if(count < 1) {
        count = 4
    }
    current.textContent = "0" + count;

    offerImages.forEach((offerImage, index) => {
        offerImage.classList.remove('active')
        let len = index + 1
        if(len == count) {
            offerImage.classList.add('active')
        }
    })
    
})

//! Calori Calculating
const genders = document.querySelectorAll('.calculating__choose-gender');
let selectedGender = null; 
//? Input 
let inputHeight = document.querySelector('#height');
let inputWeight = document.querySelector('#weight');
let inputAge = document.querySelector('#age');
//? Active
let activityLow = document.querySelector("#low")
let activitySmall = document.querySelector("#small")
let activityMedium = document.querySelector("#medium")
let activityHigh = document.querySelector("#high")
let selectedActivity = null
const totalActivty = document.querySelectorAll('.calculating__choose-items')

function genderActivityChoose(callback) {
    genders.forEach((item) => {
        item.addEventListener("click", () => {
            genders.forEach((otherGender) => {
                otherGender.classList.remove("calculating__choose-item_active");
            });
            item.classList.add("calculating__choose-item_active");
            selectedGender = item; 
            callback(selectedGender); 
        });
    });
}

totalActivty.forEach((choose) => {
    choose.addEventListener("click", () => {
        totalActivty.forEach((otherActivit) => {
            otherActivit.classList.remove("calculating__choose-activty_active");
        });
        choose.classList.add("calculating__choose-activty_active");
        selectedActivity = choose; 
    });
});

function calculateCalorie() {
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const age = inputAge.value;
    const dataRatio = parseFloat(selectedActivity.getAttribute("data-ratio"));

    let calorie = 0;

    if (selectedGender && weight && height && age && dataRatio) {
        if (selectedGender.getAttribute("id") === "male") {
            calorie = (10 * weight + 6.25 * height - 5 * age + 5) * dataRatio;
        } else if (selectedGender.getAttribute("id") === "female") {
            calorie = (10 * weight + 6.25 * height - 5 * age - 161) * dataRatio;
        }

        const resultElement = document.querySelector('.calculating__result span');
        resultElement.textContent = calorie.toFixed(0);
    }
}

genderActivityChoose(() => {
    calculateCalorie();
});

totalActivty.forEach((choose) => {
    choose.addEventListener("click", calculateCalorie);
});

inputHeight.addEventListener("input", calculateCalorie);
inputWeight.addEventListener("input", calculateCalorie);
inputAge.addEventListener("input", calculateCalorie);