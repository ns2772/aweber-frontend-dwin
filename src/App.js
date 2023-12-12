import React, { useState } from 'react';
import PasswordInput from './components/PasswordInput';
import PasswordValidator from './components/PasswordValidator';

const App = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>
            <PasswordInput 
                password={password} 
                confirmPassword={confirmPassword} 
                setPassword={setPassword} 
                setConfirmPassword={setConfirmPassword}
            />
            <PasswordValidator 
                password={password} 
                confirmPassword={confirmPassword}
            />
        </div>
    );
};

export default App;
