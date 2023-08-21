let icon = document.querySelector('.icon');
let passwordInput = document.querySelector('#password-login');
let login = document.querySelector('#btn');

// Initially hide the eye icon


function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

icon.addEventListener('click', togglePasswordVisibility);

// Show the eye icon only when the password field is focused
// passwordInput.addEventListener('focus', () => {
//     icon.style.visibility = 'visible';
// });

// passwordInput.addEventListener('blur', () => {
//     icon.style.visibility = 'hidden';
// });

let allUsers = [];

if (localStorage.getItem('allUsers')) {
    allUsers = JSON.parse(localStorage.getItem('allUsers'));
}

// login.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent the form from submitting

//     let email = document.getElementById('email').value;
//     let userPassword = document.getElementById('password-login').value;

//     if (email !== '' && userPassword !== '') {
//         let foundUser = allUsers.find(user => user.email === email && user.password === userPassword);

//         if (foundUser) {
//             alert('Login successful!');
//         } else {
//             alert('Invalid email or password. Please try again.');
//         }
//     } else {
//         alert('Please enter email and password.');
//     }
// });
