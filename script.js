const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form')

//Show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}


//Show Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Validate Email
function validateEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(input.value).toLowerCase())) {
        showSuccess(input)
    } else if (input.value === '') {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`)
    } else {
        showError(input, 'Not a valid email address ')
    }
}

// Check passwords match

function matchPasswords(input1, input2) {
    if (input1.value == input2.value) {
        showSuccess(password)
    } else {
        showError(password2, 'Passwords do not match')
    }
}

// //  Basic Event listeners
// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if (username.value === '') {
//         showError(username, 'Username is required');
//     } else {
//         showSuccess(username);
//     }

//     if (email.value === '') {
//         showError(email, 'Email is required');
//     } else if (!validateEmail(email.value)) {
//         showError(email, 'Not a valid email address')
//     } else {
//         showSuccess(email);
//     }

//     if (password.value === '') {
//         showError(password, 'password is required');
//     } else {
//         showSuccess(password);
//     }

//     if (password2.value === '') {
//         showError(password2, 'password2 is required');
//     } else {
//         showSuccess(password2);
//     }
// });


// Valodaion CHECKS

function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value === '') {
            showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} is required`)
        } else {
            showSuccess(input);
        }
    });
};

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be at least ${min} characters long`)
    } else if (input.value.length > max) {
        showError(input, `${input.id.charAt(0).toUpperCase() + input.id.slice(1)} must be less than ${max} characters long`)
    } else {
        showSuccess(input);
    }
}

// Refactored event listener --cleaner

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password2, password]);
    checkLength(username, 3, 10);
    checkLength(password, 6, 20);
    validateEmail(email);
    matchPasswords(password, password2);

});