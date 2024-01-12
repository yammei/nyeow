
import React, { useState } from 'react';
import './css/Nyeow.css';
import Menu from './UI/Menu';

const CatApp = () => {

    return (
        <div id="game-window" style={{ marginTop: '100px' }}>
            <div id="cat-container">
                <div id="cat-notifications"></div>
                <img id="game-background" src="/imgs/Yard Window.png" draggable="false" alt=""/>
                <div id="cat-info">
                    <Menu></Menu>
                </div>
            </div>
        </div>
  );
};

export default CatApp;
