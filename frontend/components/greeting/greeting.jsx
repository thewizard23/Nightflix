import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, formType }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            {(formType === 'Sign Up') ? 
            (<Link className="sign-link" to="/login">Sign In</Link>) :
            <div>
               <span className="sign-q">New to Nightflix? </span>
            <Link className="sign-link" to="/signup">Sign up now.</Link>
            </div>
            }
        </nav>
    );
 

    return currentUser ? null : sessionLinks();
};

export default Greeting;
