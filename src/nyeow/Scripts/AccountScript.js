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
export async function sendLoginRequest(usernameElement, passwordElement) {
    const usernameValue = document.getElementById(usernameElement).value;
    const passwordValue = document.getElementById(passwordElement).value;
    const loginRequest = {
        username: usernameValue,
        password: passwordValue,
    };

    // Send request to server
    const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
    })

    // Success (~200 range)
    if (res.ok) {
        console.log('Client Message: Login successful!');
        return true;
    } else {
        console.error('Login failed:', res);
        throw new Error('Login failed');
    }

}

// REQUEST: Send signup request to server for encryption and storage.
export async function sendSignupRequest(usernameElement, passwordElement) {
    const usernameValue = document.getElementById(usernameElement).value;
    const passwordValue = document.getElementById(passwordElement).value;
    const signupRequest = {
        username: usernameValue,
        password: passwordValue,
    };

    // Send request to server
    const res = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupRequest),
    })

    // Success (~200 range)
    if (res.ok) {
        console.log('Signup successful!');
    } else {
        console.error('Signup failed:', res);
        throw new Error('Signup failed');
    }

}

