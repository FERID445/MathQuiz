let eyeIcon = document.querySelector('.eye-icon');
let passwordInput = document.querySelector('#password-input');
let signupButton = document.querySelector('#signup');
let privacyCheckbox = document.querySelector('#privacy-checkbox'); // Update the selector

let allUsers = [];

eyeIcon.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('eye-icon-hide', 'eye-icon-visible');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('eye-icon-visible', 'eye-icon-hide');
    }
}

signupButton.addEventListener('click', function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password-input').value;
    let date = document.getElementById('date').value;
    let studentCheckbox = document.getElementById('student');
    let checked = privacyCheckbox.checked; // Add this line
    let inputYear = new Date(date).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - inputYear;

    if (checked && date !== '' && email !== '' && password !== '') {
        let foundUser = allUsers.find(user => user.email === email);

        if (foundUser) {
            alert('This email already exists. Please try with another email.');
        } else {
            if (age < 18) {
                alert('Please choose another date! Your age must be higher than 18.');
            } else {
                if (password.length < 9) {
                    alert('Password must be at least 9 characters long.');
                } else {
                    let userData = {
                        rank: studentCheckbox.checked ? 'student' : 'teacher',
                        email: email,
                        password: password,
                        date: date
                    };

                    allUsers.unshift(userData);
                    let allUsersJSON = JSON.stringify(allUsers);
                    localStorage.setItem('allUsers', allUsersJSON);
                    alert('Signup successful!'); // Add a success message
                }
            }
        }
    } else {
        alert('Please fill in all the required fields and accept the privacy policy.');
    }
});

window.onload = function () {
    let localUsers = JSON.parse(localStorage.getItem('allUsers'));
    if (localUsers) {
        allUsers = localUsers;
    }
};
