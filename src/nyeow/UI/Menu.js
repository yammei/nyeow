import { useRef } from 'react';
import * as GameScript from "../GameScript";
import AnimatedButton from './AnimatedButton';

const Menu = () => {

    const nameInputRef = useRef(null);

    // Clear the input value
    const clearInput = () => {
        if (nameInputRef.current) {
            nameInputRef.current.value = '';
        }
    };

    // Highlight a button object
    const handleInputChange = (event) => {
        GameScript.updateButtonHighlight("name-input", "mb1");
    };

    // Create a new cat object
    const handleCreateButton = () => {
        GameScript.createCat()
        clearInput();
    };

    // Create a new cat object
    const handleFeedButton = () => {
        GameScript.feedCat()
    };

    // Create a new cat object
    const handlePlayButton = () => {
        GameScript.playCat()
    };

    // Create a new cat object
    const handleDressButton = () => {
        GameScript.newMessage("/imgs/Cat Icon.png", "Dress Feature coming soon!")
    };

    return (
        <div id="menu-container">
            <div id="cat-status"></div>
            <input id="name-input" type="text" placeholder="Enter Kitten Name" maxlength="15" onChange={handleInputChange} ref={nameInputRef}/>
            <div id="button-container">
                <AnimatedButton className="menu-button" idName="mb1" imgSrc="/imgs/Button Create V2.png" onClick={handleCreateButton}/>
                <AnimatedButton className="menu-button" idName="mb2" imgSrc="/imgs/Button Feed V2.png"   onClick={handleFeedButton}/>
                <AnimatedButton className="menu-button" idName="mb3" imgSrc="/imgs/Button Play V2.png"   onClick={handlePlayButton}/>
                <AnimatedButton className="menu-button" idName="mb4" imgSrc="/imgs/Button Dress V2.png"  onClick={handleDressButton}/>
            </div>
            <img id="menu-background" src="/imgs/Notebook Menu.png" draggable="false" alt=""/>
        </div>
    );
};

export default Menu;
