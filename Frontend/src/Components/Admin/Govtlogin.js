import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CredentialsContext } from '../../App';

const Govtlogin = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setCredentials] = useContext(CredentialsContext);

  const loginGovtUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/govtlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = res.json();
    if (res.status !== 200 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull");
      setCredentials({ username, password });
      navigate("/govtdashboard");
    }
  }

  const open1 = () => {
    navigate("/govtaddagency");
  }

  return (
    <div className='form_page  my-5 mx-5'>
      <div className='form_container'>

        <form method="POST" onSubmit={loginGovtUser}>
          <div className='shadow-lg p-3 mb-5 bg-white rounded'  style={{width:500}}>
            <div className='mb-4'><h1>Investor Login</h1></div>

            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='username'>Username*</label>
              <input type="text" className="form-control" name='username' placeholder='Username' autoComplete='off'
                value={username} onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3 mx-auto inputArea">
              <label className="form-label" htmlFor='password'>Password*</label>
              <input type="password" className="form-control" name='password' placeholder='Password' autoComplete='off'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>


            <div className='form_btn'>
              <button type="submit" className="btn btn-danger" name='signin' id='signin'>Login</button>
              <button className="btn btn-primary mx-2" onClick={open1}><i className='fas fa-plus'></i> New User?</button>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Govtlogin;