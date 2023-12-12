import React from 'react';

const PasswordInput = ({ password, confirmPassword, setPassword, setConfirmPassword }) => {
    return (
        <div>
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
    );
};

export default PasswordInput;
