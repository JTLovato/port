
let btn = document.getElementById('btn');
let d = new Date();
const one_day = 1000 * 60 * 60 * 24 
const creation = new Date(1986, 5, 19) 
const Result = Math.round( d.getTime() - creation.getTime()) / (one_day); 
const Final_Result = Result.toFixed(0); 
let birthday = (Final_Result); 
let aboutSpan = document.getElementById("about-span");

function colors() {
    let st0 = document.getElementsByClassName('st0');
    let circle = document.getElementById('circle');
    let bg = document.getElementById('body');
    let btn = document.getElementById('btn');

    for(let i = 0, length = st0.length; i < length; i++) {
        st0[i].classList.toggle("dark-mode");
        console.log("Ugh");
        }
    bg.classList.toggle("dark-mode-bg");
    circle.classList.toggle("dark-mode-oppo");
    
    if (btn.innerHTML == "DARK MODE") {
    btn.innerHTML = "LIGHT MODE";
    } else {
        btn.innerHTML = "DARK MODE";
    }
}

    // Contact Below

function resubmit() {
    console.log("sweet");
}

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_rlhl0xh', 'template_3s0flsq', this)
            .then(function() {
                let contactInfo = document.getElementById("contact-info");
                console.log('SUCCESS!');
                contactInfo.innerHTML = "Thanks! We'll get back to you as soon as possible.";
            }, function(error) {
                let contactInfo = document.getElementById("contact-info");
                console.log('FAILED...', error);
                contactInfo.innerHTML = "Hang on.....something went wrong..somewhere....<br></br>How about this? Just email me directly at jtlovato@gmail.com. Thanks!";
            });
    });
}

    // About page

aboutSpan.innerHTML = birthday + " ";


    // Code


function rotate() {

    let cube = document.getElementsByClassName('cube');
            
    for(let i = 0, length = cube.length; i < length; i++) {
        cube[i].classList.toggle("cube-rotate");
    }
}