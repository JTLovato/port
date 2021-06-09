
let btn = document.getElementById('btn');
let d = new Date();
const one_day = 1000 * 60 * 60 * 24 
const creation = new Date(1986, 5, 19) 
const Result = Math.round( d.getTime() - creation.getTime()) / (one_day); 
const Final_Result = Result.toFixed(0); 
let birthday = (Final_Result); 
let aboutSpan = document.getElementById("about-span");

// Landing



// let name = document.getElementById('name-changer')

let Names = ["An Artist!", "A Painter!", "A Composer", "A Craftsman", "An Artisan", 
    "Wonderful!", "Fantastic!", "Creative!", "Thoughtful", "Amazing!", "Talented!", "Powerful!", 
    "An Architect", "Professional", "A Poet!", "Confident!", "Optmistic!", "Passionate!", 
    "Decisive!", "Engaging!", "Kind", "Reliable", "Trustworthy", "A Visonary", "Zealous",
    "Innovative", "Inventive", "Original", "Clever!", "Productive", "Artistic!",
    "A Dreamer!", "Omnific", "A Goalie", "A Gamer", "A Thinker!", "A Speaker", 
    "Courageous!", "Aware!", "Patient", "Honest", "Sincere", "Authentic", "Driven!", "Supportive", 
    "Generous", "Funny!", "Autonomous", "Articulate", "Adventurous!", "Ambitious!", "Calm", 
    "Charismatic", "Competitive!", "Cooperative", "Curious!", "Devoted", "Diligent", "Efficient", 
    "Flexible", "Focused", "Friendly!", "Imaginative!", "Inquisitive!", "Open", "Perceptive", 
    "Resourceful!", "Responsible", "Respectful", "Tranquil",
]



    async function sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async function quick(change) {
        let nameFlip = document.getElementById('name-changer');
        for (let i = 0; i < change; i++) {
            nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
            await sleep(15);
        }
    }

    async function rapidNames() {
        let nameFlip = document.getElementById('name-changer');
        nameFlip.innerHTML = "A Lot Of Things...";
        await sleep(3000);
        for (let i = 0; i < 4; i++) {
            quick(10);
            nameFlip.innerHTML = Names[Math.floor(Math.random() * Names.length)];
            await sleep(1000);
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
        nameFlip.innerHTML = "John!";
        nameFlip.style.fontSize = "8.5rem";
        nameFlip.style.textDecoration = "underline";
    }
    rapidNames();

    







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


