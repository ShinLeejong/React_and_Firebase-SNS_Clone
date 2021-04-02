import LogInForm from 'Components/LogInForm';
import SempathyIcon from '../Components/SempathyIcon';
import Social from 'Components/Social';
import React from 'react';

const Auth = () => {
// divide-y-4 divide-blue-600 divide-opacity-25
    return (
        <div id="auth" className="grid justify-items-center">
            <SempathyIcon />
            <LogInForm />
            <Social />
        </div>
    );
};

export default Auth;