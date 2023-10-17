// --- CONSTANTS ---

// element IDs
const dt = "date-time"
const si = "settings-icon"
const ai = "about-icon"


const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


const creationYear = 2022
const cr = "copyright-years"

// --- FUNCTIONS ---


// time & day

// helper function for adding 0 to single digit hour/minute values
function formatDigits(val) {

    var strVal = val.toString()

    if (val < 10) {
        strVal = "0" + strVal
    }

    return strVal
}

function getDateTime() {

    const date = new Date()
    const formattedDate = [dayNames[date.getDay()] + ",", date.getDate(), monthNames[date.getMonth()], 
                            formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes())]

    return formattedDate.join(" ")
}

// called every 1000ms = 1s
(function renderDateTime() {

    document.getElementById(dt).innerHTML = getDateTime()

    // repeatedly call this function
    setTimeout(renderDateTime, 1000)
}());


// copyright notice
function getCurrentYear() {

    const date = new Date()

    return date.getFullYear()
}

(function renderCopyrightYears(created, current) {

    var year = created.toString()

    if (created != current) {
        year = year + " - " + current.toString() + " "
    }

    document.getElementById(cr).innerHTML = year
    
})(creationYear, getCurrentYear()); 









// ANIMATIONS


// footer sliding animation

const slideButton = document.querySelector(".slide-button")
const slideButtonAnimationClass = "slide-button-opened"

const slideFooter = document.querySelector(".slide-footer")
const slideFooterAnimationClass = "slide-footer-opened" 

// remove opened classes and toggle the display of button, also prevent animation on page-load
slideButton.classList.remove(slideButtonAnimationClass)
slideButton.style.display = "block"

// firstly, cancel all transitions
slideFooter.classList.add("no-transition")

// secondly, animated footer back to closed position & trigger CSS reflow
slideFooter.classList.remove(slideFooterAnimationClass)

// garbage, needless value
slideFooter.offsetHeight

// lastly, add remove no-transition class again
slideFooter.classList.remove("no-transition")

// alternative using timeout:
// setTimeout(() => { slideFooter.classList.remove("no-transition") }, 500)







slideButton.addEventListener("click", function(event) {

    // prevent page refresh (a element's default behaviour)
    event.preventDefault()
    
    console.log(this)
    
    // add/remove sliding button animation class
    if (slideButton.classList.contains(slideButtonAnimationClass)) {
        slideButton.classList.remove(slideButtonAnimationClass)
    }
    else {
        slideButton.classList.add(slideButtonAnimationClass)
    }
    
    // add/remove sliding footer animation class
    if (slideFooter.classList.contains(slideFooterAnimationClass)) {
        slideFooter.classList.remove(slideFooterAnimationClass)
    }
    else {
        slideFooter.classList.add(slideFooterAnimationClass)
    }
    
    }, null)









// const slideButton = document.getElementById("slide-button")
// var slideButtonOffset = slideButton.offsetLeft

// console.log(slideButtonOffset)

// slideButton.addEventListener("click", function(event) {

//     // prevent page refresh (a element's default behaviour)
//     event.preventDefault()

//     // ternary operator in js is so cool compared to python
//     var opened = this.getAttribute("data-opened") == "true" ? 1 : 0

//     // slide button animations
//     if (!opened) {
//         slideButton.animate({left: "0", right: "615"}, {duration: 5000, iterations: 1})
//     }
//     else {
//         slideButton.animate({ left: "615", right: "0" }, { duration: 5000, iterations: 1})
//     }

//     }, null)







// var slideButton = document.getElementById("slide-button")

// // define left offsets of spans inside slide-footer (in closed + in opened position)
// var slideFooterSpansLefts = [["110%", "63%", "22%"], ["0", "0", "0"]] 
// var slideFooterSpans = document.getElementById("slide-footer").children

// // update styles on page load if js is enabled
// for (var i = 0; i < slideFooterSpans.length; i++) {
//     slideFooterSpans[i].style.left = slideFooterSpansLefts[i]
// }

// // add event listener
// slideButton.addEventListener("click", function(event) {

//     // prevent page refresh (a element's default behaviour)
//     event.preventDefault()

//     console.log(this)

//     // ternary operator in js is so cool compared to python
//     var opened = this.getAttribute("data-opened") == "true" ? 1 : 0

//     // slide button animations
//     if (!opened) {
//         slideButton.style.right = null
//         slideButton.style.left = "0"
//     }



// }, null)















// function rotateAnimation(element, deg) {

//     element.style.transition = "transform 2s"

//     // get elements dimensions to calculate center of rotation
//     // var width = element.getBBox().width
//     // var height = element.getBBox().height

//     element.style.transform = "rotate(" + deg + "deg" +")"


// }




// let rotationDegrees = 360

// // icon animations
// document.getElementById(si).addEventListener("mouseenter", function() {rotateAnimation(this, rotationDegrees)})




