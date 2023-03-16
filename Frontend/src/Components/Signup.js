import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CredentialsContext } from '../App';

const Signup = () => {

  const navigate = useNavigate();

  const [udid, setUdid] = useState('');
  const [phone, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setCredentials] = useContext(CredentialsContext);

  const register = async (e) => {
    e.preventDefault();

    if (udid && phone && password) {
      const res = await fetch("http://localhost:5000/signup", {
        // mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          udid, phone, password
        })
      });

      const data = await res.json();
      if (res.status !== 200 || !data) {
        //window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else {
        //window.alert("Registration Successfull");
        console.log("Registration Successfull");

        setCredentials({
          udid,
          password
        });

        navigate("/dashboard");
      }
    }
    else {
      window.alert("Invalid Registration");
    }


  }

  return (

    <div className='form_page  my-5 mx-5'>
      <div className='form_container'>
        <form>
          <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{width:500}}>
            <div className='mb-5'><h1>Register / SignUp</h1></div>

            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='name'>Username*</label>
              <input type="text" className="form-control" name='udid' placeholder='Username' autoComplete='off'
                value={udid}
                onChange={(e) => setUdid(e.target.value)}
              />
            </div>

            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='name'>Contact No*</label>
              <input type="number" className="form-control" name='phone' placeholder='Contact No.' autoComplete='off'
                value={phone}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>


            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='password'>Password*</label>
              <input type="password" className="form-control" name='password' placeholder='Password' autoComplete='off'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='form_btn'>
              <button type="submit" className="btn btn-dark" name='register' onClick={register} value="register">Register</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;