import * as AccountScript from "../Scripts/AccountScript";
import AnimatedButton from './AnimatedButton';

const Login = ({ onSignupClick }) => {

    // Send login information to server for verification
    const handleLoginButton = async () => {
        console.log("here1");
        const res = await AccountScript.sendLoginRequest("username-input", "password-input1");
        if (res === true) {
            console.log("so true");
        }        // Welcome message
        // Swap to controls menu
    };

    // Toggle password input censorship
    const handleViewButton = (inputElementName, buttonElementName) => {
        AccountScript.togglePasswordView(inputElementName, buttonElementName);
    };

    // Set state to load signup page
    const handleSignupButton = () => {
        onSignupClick();
    };

    return (
        <div id="mcc-account" className="menu-container-component">
            <p id="account-message">Welcome!</p>

            <div id="account-input-container">
                <input className="account-input" id="username-input" type="text" placeholder="Username" maxlength="20"/>
                <div id="password-input-container">
                    <input className="account-input" id="password-input1" type="password" placeholder="Enter Password" maxlength="20"/>
                    <img className="toggle-button" id="toggle-button1" src="/imgs/View Button.png" onClick={() => handleViewButton("password-input1", "toggle-button1")} draggable="false" alt=""></img>
                </div>
                <AnimatedButton className="login-button" idName="abl" imgSrc="/imgs/Button Login V2.png" onClick={handleLoginButton}/>
            </div>

            <div id="account-button-container">
                <p id="signup-message">No Account? <span id="signup-text" onClick={handleSignupButton}>Sign Up!</span></p>
            </div>
        </div>
    );

}

export default Login;