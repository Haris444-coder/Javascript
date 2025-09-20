// ChatGPT Conversation Links:
// 1. https://chatgpt.com/share/67d79b62-7a84-8009-accf-10f71ae7e5af
// 2.
// Add as many links as needed


let studentName = document.getElementById("student-name");
let studentNameError = document.getElementById("student-name-error");
let teacherName = document.getElementById("professor-name");
let teacherNameError = document.getElementById("professor-name-error");
let adjective = document.getElementById("adjective");
let adjError = document.getElementById("adjective-error");
let verb = document.getElementById("verb");
let verbError = document.getElementById("verb-error");
let number = document.getElementById("number");
let numberError = document.getElementById("number-error");
let phoneNumber = document.getElementById("phone-number");
let phoneError = document.getElementById("phone-number-error");
let character = document.getElementById("cartoon-character");
let characterError = document.getElementById("cartoon-character-error");
let songTitle = document.getElementById("song-title");
let songError = document.getElementById("song-title-error");
let submit = document.getElementById("submit-btn");
let colour = document.getElementById("colour");
let madlibForm = document.getElementById("madlib-form");
let madlibFormContainer = document.getElementById("madlib-form-container");
let story = document.getElementById("story-container");
let reset = document.getElementById("reset-btn");

function hideErrors() {
    studentNameError.style.display = "none";
    teacherNameError.style.display = "none";
    adjError.style.display = "none";
    verbError.style.display = "none";
    numberError.style.display = "none";
    phoneError.style.display = "none";
    characterError.style.display = "none";
    songError.style.display = "none";
}

function isValid() {
    let valid = true;
    
    //Student Name Validation
    if (/^[A-Z][a-z]+$/.test(studentName.value) && studentName.value.length > 1) {
        studentNameError.textContent = "";
    } else {
        studentNameError.textContent = "Name must start with a capital letter and contain only letters.";
        studentNameError.style.display = "block";
        valid = false;
    }

    //Professor Name Validation
    if (/^[A-Z][a-z]+$/.test(teacherName.value) && teacherName.value.length > 1) {
        teacherNameError.textContent = "";
    } else {
        teacherNameError.textContent = "Name must start with a capital letter and contain only letters.";
        teacherNameError.style.display = "block";
        valid = false;
    }

    //Adjective Validation
    if (adjective.value.length >= 5) {
        adjError.textContent = "";
    } else {
        adjError.textContent = "Adjective must be at least 5 characters long.";
        adjError.style.display = "block";
        valid = false;
    }

    //Verb Validation
    if (/^[A-Za-z]+ing$/.test(verb.value)) {
        verbError.textContent = "";
    } else {
        verbError.textContent = "Verb must end in '-ing', such as 'running' or 'jumping'.";
        verbError.style.display = "block";
        valid = false;
    }

    //Number Validation
    if (/^(100|[1-9][0-9]?)$/.test(number.value)) {
        numberError.textContent = "";
    } else {
        numberError.textContent = "Number must be between 1 and 100.";
        numberError.style.display = "block";
        valid = false;
    }

    //Phone Number Validation
    if (/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber.value)) {
        phoneError.textContent = "";
    } else {
        phoneError.textContent = "Phone number must be in the format '123-456-7890'.";
        phoneError.style.display = "block";
        valid = false;
    }

    //Cartoon Character Validation
    if (/^[\S\s]+$/.test(character.value)) {
        characterError.textContent = "";
    } else {
        characterError.textContent = "Please enter a cartoon character name.";
        characterError.style.display = "block";
        valid = false;
    }

    //Song Validation
    if (/^[\S\s]+$/.test(songTitle.value)) {
        songError.textContent = "";
    } else {
        songError.textContent = "Please enter a song title.";
        songError.style.display = "block";
        valid = false;
    }

    submit.disabled = !valid;
    return valid;
}

let inputs = [studentName, teacherName, adjective, verb, number, phoneNumber, character, songTitle];
inputs.forEach(input => {
    input.addEventListener("input", function() {
        isValid();
    });
});

//Form Submission
madlibForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    if (isValid()) {
        document.body.style.backgroundColor = colour.value;
        madlibFormContainer.style.display = "none"; 
        story.style.display = "block";
        document.getElementById("story-adjective").textContent = adjective.value;
        document.getElementById("story-student-name").textContent = studentName.value;
        document.getElementById("story-number").textContent = number.value;
        document.getElementById("story-professor-name").textContent = teacherName.value;
        document.getElementById("story-cartoon-character").textContent = character.value;
        document.getElementById("story-verb").textContent = verb.value;
        document.getElementById("story-phone-number").textContent = phoneNumber.value;
        document.getElementById("story-song-title").textContent = songTitle.value;
        document.getElementById("story-colour").textContent = colour.value;
        document.getElementById("story-student-name-2").textContent = studentName.value;
        document.getElementById("story-professor-name-2").textContent = teacherName.value;
    }
});

reset.addEventListener("click", function () {
    madlibForm.reset();
    hideErrors();
    document.body.style.backgroundColor = "#e0e7ff";
    madlibFormContainer.style.display = "block";  
    story.style.display = "none";  
    submit.disabled = true;  
});

isValid();