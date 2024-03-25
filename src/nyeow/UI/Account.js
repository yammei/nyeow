import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Account = () => {
    const [showLogin, setShowLogin] = useState(true);

    const handleSignupClick = () => {
        setShowLogin(false);
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    return (
        <div>
            {showLogin ? (
                <Login onSignupClick={handleSignupClick} />
            ) : (
                <Signup onLoginClick={handleLoginClick} />
            )}
        </div>
    );
};

export default Account;