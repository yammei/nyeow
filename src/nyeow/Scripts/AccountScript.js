// ELEMENT: Toggle view of password input
export function togglePasswordView(passwordElementName, buttonElementName) {
    const passwordElement = document.getElementById(passwordElementName);
    const buttonElement = document.getElementById(buttonElementName);

    if (passwordElement.type === "password") {
        passwordElement.type = "text";
        buttonElement.src = "/imgs/Hide Button.png";
    } else {
        passwordElement.type = "password";
        buttonElement.src = "/imgs/View Button.png";
    }
}

// REQUEST: Send login request to server for verifification.
export function sendLoginRequest(usernameElement, passwordElement) {
    const usernameValue = document.getElementById(usernameElement).value;
    const passwordValue = document.getElementById(passwordElement).value;
    const loginRequest = {
        username: usernameValue,
        password: passwordValue,
    };

    // Send request to server
    fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
    })
    .then(response => {
        // Success (~200 range)
        if (response.ok) {
            console.log('Login successful!');
        } else {
            console.error('Login failed:', response);
            throw new Error('Login failed');
        }
    })
    .catch(error => {
        console.error('Error sending login request:', error);
    });
}

// REQUEST: Send signup request to server for encryption and storage.
export function sendSignupRequest(usernameElement, passwordElement) {
    const usernameValue = document.getElementById(usernameElement).value;
    const passwordValue = document.getElementById(passwordElement).value;
    const signupRequest = {
        username: usernameValue,
        password: passwordValue,
    };

    // Send request to server
    fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupRequest),
    })
    .then(response => {
        // Success (~200 range)
        if (response.ok) {
            console.log('Signup successful!');
        } else {
            console.error('Signup failed:', response);
            throw new Error('Signup failed');
        }
    })
    .catch(error => {
        console.error('Error sending signup request:', error);
    });
}

