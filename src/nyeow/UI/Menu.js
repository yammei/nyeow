import React, { useState } from 'react';
import Controls from './Controls';
import Account from './Account';

const Menu = () => {
    const [currentTab, setCurrentTab] = useState('controls');

    return (
        <div id="menu-container">
            {/* <Account></Account> */}
            <Controls></Controls>
            <img id="menu-background" src="/imgs/Notebook Menu.png" draggable="false" alt=""/>
        </div>
    );
};

export default Menu;