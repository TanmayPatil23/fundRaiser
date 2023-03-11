import React from 'react';
import { useNavigate } from 'react-router-dom';

const Options = () => {

    const navigate=useNavigate();

    const openSignin = () => {
        navigate("/login");
    }

    const openSignup = () => {
        navigate("/signup");
    }

    const opennew = () => {
        navigate("/agencyapplyform");
    }

    return (
        <div>
            <button type="submit" className="btn btn-dark btn-lg my-5 mx-3" onClick={openSignin}>Login/SignIn</button>
        </div>
    )
}

export default Options;