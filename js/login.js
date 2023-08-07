let icon = document.querySelector('span');
let password = document.querySelector('#password-login')
let login = document.querySelector('button');

function visibilty () {
    if(password.type == "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}
icon.addEventListener('click', visibilty);




let allUsers = [];
if(localStorage.getItem('allUsers')){
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}


login.addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password-login').value;


    if (email !== "" && password !== "") {
        let foundUser = allUsers.find(user => user.email === email && user.password === password);

        if (foundUser) {
            alert("Login successful!");
        } else {
            alert("Invalid email or password. Please try again.");
        }

    } 
    else {
        alert("Please enter email and password.");
    }

})
