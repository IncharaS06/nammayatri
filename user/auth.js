function signUp() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // Add user data to Firestore
            return db.collection('users').doc(user.uid).set({
                username: username,
                email: email
            });
        })
        .then(() => {
            alert('Signup successful!');
            window.location.href = '/login.html'; // Or wherever you want to redirect
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Signup error:", errorCode, errorMessage);
            alert('Signup failed: ' + errorMessage); // Display error to the user
        });
}

function googleSignUp() {
    // Simulate Google Sign-Up
    alert('Simulating Google Sign-Up');
    // Add actual Google Sign-Up integration here
}
