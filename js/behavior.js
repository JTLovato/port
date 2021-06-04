
var btn = document.getElementById('btn');
var d = new Date();
var n = d.getFullYear();
var footer = document.getElementById('footer');

function colors() {

    var st0 = document.getElementsByClassName('st0');
    var circle = document.getElementById('circle');
    var bg = document.getElementById('body');
    var btn = document.getElementById('btn');

    for(var i = 0, length = st0.length; i < length; i++) {
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
                    var contactInfo = document.getElementById("contact-info");
                    console.log('SUCCESS!');
                    contactInfo.innerHTML = "Thanks! We'll get back to you as soon as possible.";
                }, function(error) {
                    var contactInfo = document.getElementById("contact-info");
                    console.log('FAILED...', error);
                    contactInfo.innerHTML = "Hang on.....something went wrong..somewhere....<br></br>How about this? Just email me directly at jtlovato@gmail.com. Thanks!";
                });
        });
    }

    // About page

    const one_day = 1000 * 60 * 60 * 24 
    const present_date = new Date(); 
    const creation = new Date(1986, 5, 19) 
    const Result = Math.round( present_date.getTime() - creation.getTime()) / (one_day); 
    const Final_Result = Result.toFixed(0); 
    let birthday = (Final_Result); 
    let aboutSpan = document.getElementById("about-span");

    aboutSpan.innerHTML = birthday + " ";




// Footer

footer.innerHTML = "&copy" + n;