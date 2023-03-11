import React, {useContext} from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { CredentialsContext } from '../../App';

const Govtdashboard = () => {

    const navigate=useNavigate();

    const [credentials, setCredentials] = useContext(CredentialsContext);

    const logout = () => {
        setCredentials(null);
        navigate("/");
      }

      const open = () =>{
        navigate("/govtapplications");
      }

  return (
    <>
        {
          <button type="submit" className="btn btn-primary btn-lg my-3 mx-4" onClick={open}>Show Applications</button>
        }
        {/* {credentials && <button className='logout_btn' onClick={logout}>Logout</button>} */}

        {
          <div className='form_btn form_container'>
          <button className='btn btn-danger mx-4 my-4' onClick={logout}>Logout</button>
          </div>
        }
    </>
  )
}

export default Govtdashboard;