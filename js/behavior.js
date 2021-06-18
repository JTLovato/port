
let btn = document.getElementById('btn');
let d = new Date();
const one_day = 1000 * 60 * 60 * 24 
const creation = new Date(1986, 5, 19) 
const Result = Math.round( d.getTime() - creation.getTime()) / (one_day); 
const Final_Result = Result.toFixed(0); 
let birthday = (Final_Result); 
let aboutSpan = document.getElementById("about-span");
let nameFlip = document.getElementById('name-changer');
let contact = document.getElementById('contact-form')
let contactInfo = document.getElementById("contact-info");
let userName = document.getElementById('user_name');
let message = document.getElementById('message');
let userEmail = document.getElementById('user_email');
let contactTrouble = document.getElementById('contact_trouble');
let Names = ["An Artist!", "A Painter!", "A Composer", "A Craftsman", "An Artisan", 
    "Wonderful!", "Fantastic!", "Creative!", "Thoughtful", "Amazing!", "Talented!", "Powerful!", 
    "An Architect", "Professional", "A Poet!", "Confident!", "Optmistic!", "Passionate!", 
    "Decisive!", "Engaging!", "Kind", "Reliable", "Trustworthy", "A Visonary", "Zealous",
    "Innovative", "Inventive", "Original", "Clever!", "Productive", "Artistic!",
    "A Dreamer!", "Omnific", "A Goalie", "A Gamer", "A Thinker!", "A Speaker", 
    "Courageous!", "Aware!", "Patient", "Honest", "Sincere", "Authentic", "Driven!", "Supportive", 
    "Generous", "Funny!", "Autonomous", "Articulate", "Adventurous!", "Ambitious!", "Calm", 
    "Charismatic", "Competitive!", "Cooperative", "Curious!", "Devoted", "Diligent", "Efficient", 
    "Flexible", "Focused", "Friendly!", "Imaginative!", "Open", "Perceptive", 
    "Resourceful!", "Responsible", "Respectful", "Tranquil",
]


// Navigation


let togButton = document.getElementById("btn");
darkOn = localStorage.getItem("dark") == "true" ? true : false;
setTheme();

function setTheme(){
    localStorage.setItem("dark", darkOn ? "true" : "false");
    if(darkOn){
        document.body.setAttribute("theme", "dark");
        togButton.innerHTML = "LIGHT MODE";
    } else {
        document.body.setAttribute("theme", "light");
        togButton.innerHTML = "DARK MODE";
    }
}

var darkOn = false;
function toggle(){
    darkOn = !darkOn;
    setTheme();
}

togButton.addEventListener("click", toggle);





// Landing

    async function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async function quick(change) {
        for (let i = 0; i < change; i++) {
            nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
            await sleep(10);
        }
    }

    async function rapidNames() {
        if(nameFlip) {
        nameFlip.innerHTML = "A Lot Of Things...";
        await sleep(3000);
        nameFlip.style.fontSize = "7rem";
        for (let i = 0; i < 4; i++) {
            quick(40);
            nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
            await sleep(1500);
        }
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = "A Designer!";
        nameFlip.style.fontSize = "7.5rem";
        await sleep(1000);  
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = "A Developer";
        nameFlip.style.fontSize = "8rem";
        await sleep(1000);     
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
        await sleep(15);
        nameFlip.innerHTML = "John!";
        nameFlip.style.fontSize = "8.5rem";}
    }
    rapidNames();

    // Contact Below

    window.onload = function() {
        if (contact) {
        contact.addEventListener('submit', function(event) {
            event.preventDefault();
            if ( userEmail.value === "" || userName.value === "" || message.value ==="") {
                contactTrouble.style.display = "block";
                console.log("test");
            } else {
            this.contact_number.value = Math.random() * 100000 | 0;
            emailjs.sendForm('service_rlhl0xh', 'template_3s0flsq', this)
                .then(function() {
                    console.log('SUCCESS!');
                    contactInfo.style.fontSize = "2.5rem"
                    contactInfo.innerHTML = "Thanks! We'll get back to you as soon as possible.";
                }, function(error) {
                    console.log('FAILED...', error);
                    contactInfo.style.fontSize = "2.5rem"
                    console.log(error);
                    contactInfo.innerHTML = "Hang on.....something went wrong..somewhere....<br></br>How about this? Just email me directly at jtlovato@gmail.com. Thanks!";
                });
        }});
    }
}

    // About page
    if (aboutSpan) {
    aboutSpan.innerHTML = birthday + " ";
    }

        // Code


    function rotate() {

        let cube = document.getElementsByClassName('cube');
                
        for(let i = 0, length = cube.length; i < length; i++) {
            cube[i].classList.toggle("cube-rotate");
        }
    }
