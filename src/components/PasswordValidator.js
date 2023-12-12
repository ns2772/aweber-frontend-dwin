import React from 'react';
import validatePassword from '../utils/validatePassword';

const PasswordValidator = ({ password, confirmPassword }) => {
    const handleValidation = () => {
        const result = validatePassword(password, confirmPassword);
        alert(result.message);
    };

    return (
        <button onClick={handleValidation}>Submit</button>
    );
};

export default PasswordValidator;
