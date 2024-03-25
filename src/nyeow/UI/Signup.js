import * as AccountScript from "../Scripts/AccountScript";
import BackButton from "./BackButton";
import AnimatedButton from './AnimatedButton';

const Signup = ({ onLoginClick }) => {

    // Send account information to server for creation
    const handleSignupButton = () => {
        AccountScript.sendSignupRequest("username-input", "password-input1");
        // Signup success message
        // Clear input values
    };

    // Toggle password input censorship
    const handleViewButton = (inputElementName, buttonElementName) => {
        AccountScript.togglePasswordView(inputElementName, buttonElementName);
    };

    // Set state to load signup page
    const handleBackButton = () => {
        onLoginClick();
    };

    return (
        <div id="mcc-account" className="menu-container-component">
            <p id="account-message">Create an account!</p>

            <BackButton onBackClick={handleBackButton} />

            <div id="account-input-container">
                <input className="account-input" id="username-input" type="text" placeholder="Username" maxlength="20"/>
                <div id="password-input-container">
                    <input className="account-input" id="password-input1" type="password" placeholder="Enter Password" maxlength="20"/>
                    <img className="toggle-button" id="toggle-button1" src="/imgs/View Button.png" onClick={() => handleViewButton("password-input1", "toggle-button1")} draggable="false" alt=""></img>
                </div>
                <div id="password-input-container">
                    <input className="account-input" id="password-input2" type="password" placeholder="Re-enter Password" maxlength="20"/>
                    <img className="toggle-button" id="toggle-button2" src="/imgs/View Button.png" onClick={() => handleViewButton("password-input2", "toggle-button2")} draggable="false" alt=""></img>
                </div>
            </div>

            <div id="account-button-container">
                <AnimatedButton className="signup-button" idName="abs" imgSrc="/imgs/Button Signup V2.png" onClick={handleSignupButton}/>
            </div>

        </div>
    );
};

export default Signup;