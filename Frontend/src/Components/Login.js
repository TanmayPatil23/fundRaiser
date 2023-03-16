import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CredentialsContext } from '../App';

const Login = () => {

  const navigate = useNavigate();
  const [udid, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setCredentials] = useContext(CredentialsContext);

  const loginUser = async (e) => {

    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      // mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ udid, password })
    });

    const data = res.json();
    if (res.status !== 200 || !data) {
      window.alert("Invalid Credentials");
    } else {
      //window.alert("Login Successfull");
      setCredentials({ udid, password });
      navigate("/dashboard");
    }

  }

  const openSignup = () => {
    navigate("/signup");
  }

  return (

    <div className='form_page my-5 mx-5'>
      <div className='form_container'>
        <form >
          <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{ width: 500 }}>
            <div className='mb-4'><h1>Company Login</h1></div>

            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='username'>Username*</label>
              <input type="text" placeholder='Enter Username' className="form-control" name='udid' autoComplete='off'
                value={udid} onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='password'>Password*</label>
              <input type="password" placeholder='Enter Password' className="form-control" name='password' autoComplete='off'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>


            <div className='form_btn'>
              <button type="submit" className="btn btn-dark" name='signin' onClick={loginUser}>Login</button>
              <button type="submit" className="btn btn-dark mx-3" onClick={openSignup}>Register/Signup</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;