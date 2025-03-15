const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

function showSignup() {
    loginForm.classList.add('slide-left');
    signupForm.classList.remove('slide-right');
}

function showLogin() {
    loginForm.classList.remove('slide-left');
    signupForm.classList.add('slide-right');
}

function sendLoginOTP() {
    const phone = document.getElementById('loginPhone').value;
    // Simulate sending OTP via email
    alert(`Simulating sending login OTP to email associated with phone number: ${phone}`);
    // Add actual backend integration here
}

function verifyLoginOTP() {
    const otp = document.getElementById('loginOTP').value;
    // Simulate verifying OTP
    alert(`Simulating verifying login OTP: ${otp}`);
    // Add actual backend verification and login logic here
}

function sendSignupOTP() {
    const phone = document.getElementById('signupPhone').value;
    // Simulate sending OTP via email
    alert(`Simulating sending signup OTP to email associated with phone number: ${phone}`);
    // Add actual backend integration here
}

function verifySignupOTP() {
    const otp = document.getElementById('signupOTP').value;
    // Simulate verifying OTP
    alert(`Simulating verifying signup OTP: ${otp}`);
    // Add actual backend verification and signup logic here
}

function googleSignIn() {
    // Simulate Google Sign-In
    alert('Simulating Google Sign-In for login');
    // Add actual Google Sign-In integration here
}

function googleSignUp() {
    // Simulate Google Sign-Up
    alert('Simulating Google Sign-Up');
    // Add actual Google Sign-Up integration here
}
