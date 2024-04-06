document.getElementById("back-to-top").addEventListener('click', () => {
    alert('Going back to top')
})


function applyColorScheme1() {
    document.body.style.backgroundColor = 'lightgray';
    document.body.style.color = 'black';
    document.querySelectorAll('.list').forEach((e)=>{
        e.style.color = 'black';
    })
    document.querySelector('#navigation').style.backgroundColor = 'white';
    document.querySelector('footer').style.backgroundColor = 'white';
    document.querySelector('footer').style.color = 'black';
}
function applyColorScheme2() {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'purple';
    document.querySelectorAll('.list').forEach((e)=>{
        e.style.color = 'green';
    })
    document.querySelector('#navigation').style.backgroundColor = 'white';
    document.querySelector('footer').style.backgroundColor = 'white';
    document.querySelector('footer').style.color = 'green';
}
document.getElementById('color-scheme-1').addEventListener('click', applyColorScheme1);
document.getElementById('color-scheme-2').addEventListener('click', applyColorScheme2);


const targetElements = document.querySelectorAll('a img');
function increaseCursorWeight(event) {
    event.target.style.cursor = 'progress';
}
function resetCursor(event) {
    event.target.style.cursor = 'auto';
}
targetElements.forEach(function(element) {
    element.addEventListener('mouseover', increaseCursorWeight);
    element.addEventListener('mouseout', resetCursor);
});


const currentTime = new Date();
const currentHour = currentTime.getHours();
let greetingMessage;
if (currentHour < 12) {
    greetingMessage = "Have a good morning!";
} else if (currentHour < 18) {
    greetingMessage = "Have a good afternoon!";
} else {
    greetingMessage = "Have a good evening!";
}
document.getElementById("greeting-message").textContent = greetingMessage;


function validateForm(){
    const form = document.getElementById("feedback-form");
    const submitButton = document.getElementById("submit-button");
    const message = document.getElementById("message-panel");
    submitButton.addEventListener("click", function validate(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const feedback = document.getElementById("feedback").value;
        if (!name || !email || !age || !gender || !feedback){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please fill in all fields"
        }else if (name.length < 3) {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please select a valid name ";
        }else if (!email.endsWith("@dal.ca")){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please enter a Dal email";
        }else if (!(gender === "male" || gender === "female" || gender === "other")) {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please enter 'male', 'female' or 'other'";
        }else if (isNaN(parseInt(age)) || parseInt(age) < 0 || parseInt(age) > 150) {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please select a valid age";
        }else if (feedback.length < 3) {
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "Please give a feedback";
        }else {
            message.style.backgroundColor = "green";
            message.style.color = "white";
            message.innerHTML = "Feedback Submitted!";
        }
    })
}
validateForm();