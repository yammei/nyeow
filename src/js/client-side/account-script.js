function togglePassword() {
    const passwordInput = document.getElementById("cat-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function generatePassword() {
    const password = generateRandomPassword();
    const passwordInput = document.getElementById('cat-password');
    passwordInput.value = password;
}

function generateRandomPassword() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password;
}
