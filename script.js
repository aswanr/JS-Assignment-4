// 1)Create a div with background color red, create buttons
// a) to hide the div
// b) to change the background color of the div
// c) to show your basic details on the div, the details should hide/show, on the click.

function divhide() {
    const divd = document.getElementById("question-1");
    if (divd.style.display === "none") {
        divd.style.display = "block"
    }
    else {
        divd.style.display = "none";
    }
}
function changecolour() {
    const colo = document.getElementById("question-1");
    if (colo.style.backgroundColor === "yellow") {
        colo.style.backgroundColor = "red";
    }
    else {
        colo.style.backgroundColor = "yellow";
    }
}

document.getElementById('details').addEventListener('click', function () {
    const z = document.getElementById('para');
    if (z.style.display === "none") {
        z.style.display = "block";
        z.innerHTML = "details seens"
    }
    else {
        z.style.display = 'none';
    }
});



// 2)Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message that 
// "9 is fully occupied please select another number", when selected any number other than 9 it should show a message as 
// "you selected 'particular number' " in a div, on hovering the div it should change the background color 
// of the div into a highlighting shade, while the mouse pointer leaves the message area the background color 
// should go back to as before (don't use CSS to attain the hovering functionality)

function selections() {
    const a = document.getElementById("numberSelect");
    const b = document.getElementById("erroepage");
    if (a.value === "9") {
        a.value = "10";
        b.innerHTML = "9 is fully occupied please select another number";
    }
    else {
        b.innerHTML = `you selected ${a.value} `;
    }
    document.getElementById("erroepage").addEventListener('mouseover', function () {
        b.style.backgroundColor = "yellow";
    });
    document.getElementById("erroepage").addEventListener('mouseout', function () {
        b.style.backgroundColor = "White";
    });

}

// 3)Consider an array with name of 10 programming languages, make 10 buttons by iterating this array,
//  when clicked on each button the name of the programming language should be shown in a corresponding div. 

let a1 = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "Swift", "C#", "Go", "Rust"];
const btcondiner = document.getElementById("third-q");
a1.forEach(element => {
    const bt = document.createElement('button');
    bt.textContent = element;
    bt.addEventListener('click', function () {
        selectlanguge(element);
    });
    btcondiner.appendChild(bt);
});
function selectlanguge(language) {
    document.getElementById("sel-languge").innerHTML = language;
}

// 4)Make a form with fields name, phone number, place, company name, pin code
// a) if any of the field is empty on submitting it should show corresponding error messages on below of all the required fields.

// b) pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.

// c) Minimum length of phone number should be 10, otherwise show corresponding error msg below the mobile no. field. 

// d) On submit of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).

// e) Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise the button will be disabled.

// Note: The page shouldn't refresh on submitting the form in any of the questions and show error messages below the appropriate fields only.

const form = document.getElementById("form");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name1 = document.getElementById("name").value.trim();
    const phonenumber = document.getElementById("Phonenumber").value.trim();
    const Comname = document.getElementById("Com-name").value.trim();
    const pin = document.getElementById("pin").value.trim();
    let isValid = true;
    if (name1 === "") {
        document.getElementById("nameerror").innerHTML = "Name Required";
        document.getElementById("nameerror").style.color = "red";
        isValid = false;
    }
    else {
        document.getElementById("nameerror").innerHTML = "";
        document.getElementById("nameerror").style.color = "";
    }
    if (phonenumber === "") {
        document.getElementById("numbererror").innerHTML = "Phonenumber required";
        document.getElementById("numbererror").style.color = "red";
        isValid = false;
    } else if (!Number(phonenumber)) {
        document.getElementById("numbererror").innerHTML = "Must be an Integer";
        document.getElementById("numbererror").style.color = "red";
        isValid = false;
    } else if (phonenumber.length !== 10) {
        document.getElementById("numbererror").innerHTML = "Number length should be 10";
        document.getElementById("numbererror").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("numbererror").innerHTML = "";
        document.getElementById("numbererror").style.color = "";
    }
    if (Comname === "") {
        document.getElementById("companynameerror").innerHTML = "Company name required";
        document.getElementById("companynameerror").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("companynameerror").innerHTML = "";
        document.getElementById("companynameerror").style.color = "";
    }
    if (pin === "") {
        document.getElementById("pincodeerrro").innerHTML = "Pin code required";
        document.getElementById("pincodeerrro").style.color = "red";
        isValid = false;
    } else if (!Number(pin)) {
        document.getElementById("pincodeerrro").innerHTML = "Must be an Integer";
        document.getElementById("pincodeerrro").style.color = "red";
        isValid = false;
    } else {
        document.getElementById("pincodeerrro").innerHTML = "";
        document.getElementById("pincodeerrro").style.color = "";
    }
    if (isValid) {
        localStorage.setItem("name", name1);
        localStorage.setItem("phonenumber", phonenumber);
        localStorage.setItem("companyname", Comname);
        localStorage.setItem("pincode", pin);
        form.reset();
    }
});
function prepopulate() {
    const prepopulateButton = document.getElementById("prepopulate");
    const name = localStorage.getItem("name");
    const pno = localStorage.getItem("phonenumber");
    const comname = localStorage.getItem("companyname");
    const pinco = localStorage.getItem("pincode");
    const name1 = document.getElementById("name").value.trim();
    if (name === name1) {
        document.getElementById("name").value = name || '';
        document.getElementById("Phonenumber").value = pno || '';
        document.getElementById("Com-name").value = comname || '';
        document.getElementById("pin").value = pinco || '';
    }
    else {
        prepopulateButton.disabled = true;
    }
}
function checkPrepopulateButton() {
    const prepopulateButton = document.getElementById("prepopulate");
    if (localStorage.getItem('name') || localStorage.getItem('phonenumber') || localStorage.getItem('companyname') ||
        localStorage.getItem('pincode')) {
        prepopulateButton.disabled = false;
    }
    else {
        prepopulateButton.disabled = true;
    }
}
window.onload = function () {
    checkPrepopulateButton();
    document.getElementById("prepopulate").onclick = prepopulate;
};

// 5)Create a form with a text field which when submitted, will change the tab title to whatever is entered, 
// limit the field to 50 characters, otherwise show error message, stay on the same page when submitted(it shouldn't refresh).
const form2 = document.getElementById("form2");
form2.addEventListener('submit', function (event) {
    event.preventDefault(event);
    const textfield = document.getElementById("textfield").value;
    if (textfield.length > 50) {
        alert("above 50 charater are there");
    }
    else {
        document.getElementsByTagName('title')[0].innerHTML = `${textfield}`;
    }
})

// 6)When control+enter key is pressed show an alert message. 
document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.key === 'Enter') {
        alert('pressed control and enter');
    }
}
)