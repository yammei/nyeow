import * as AccountScript from "../Scripts/AccountScript";
import AnimatedButton from './AnimatedButton';

const Account = () => {

    // Send login information to server for verification
    const handleLoginButton = () => {
        AccountScript.sendLoginRequest("username-input", "password-input");
        // Welcome message
        // Swap to controls menu
    };

    // Send account information to server for creation
    const handleSignupButton = () => {
        AccountScript.sendSignupRequest("username-input", "password-input");
        // Signup success message
        // Clear input values
    };

    // Toggle password input censorship
    const handleViewButton = () => {
        AccountScript.togglePasswordView("password-input", "toggle-button");
    };

    return (
        <div id="mcc-account" className="menu-container-component">
            <p id="account-message">
                Welcome to nyeow!<br></br>
                Please login or signup!
            </p>

            <div id="account-input-container">
                <input className="account-input" id="username-input" type="text" placeholder="Username" maxlength="20"/>
                <div id="password-input-container">
                    <input className="account-input" id="password-input" type="password" placeholder="Password" maxlength="20"/>
                    <img id="toggle-button" src="/imgs/View Button.png" onClick={handleViewButton} draggable="false" alt=""></img>
                </div>
            </div>

            <div id="account-button-container">
                <AnimatedButton className="login-button" idName="abl" imgSrc="/imgs/Button Login V2.png" onClick={handleLoginButton}/>
                <AnimatedButton className="signup-button" idName="abs" imgSrc="/imgs/Button Signup V2.png" onClick={handleSignupButton}/>
            </div>

        </div>
    );
};

export default Account;