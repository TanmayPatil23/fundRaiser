import React, {useContext} from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { CredentialsContext } from '../../App';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useState} from 'react';


const Agencydashboard = () => {

    const navigate=useNavigate();

    const [credentials, setCredentials] = useContext(CredentialsContext);

    const {username} = useParams("");

    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {
    const res = await fetch(`http://localhost:5000/agencydashboard/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
  
      const data = await res.json();
  
      if (res.status === 404 || !data) {
        console.log("Error in details fetch");
      }
      else {
        setUserdata(data);
        console.log("Details Fetched");
      }
    }
  
    useEffect(() => {
      getdata();
    }, [])

    const logout = () => {
      setCredentials(null);
      navigate("/");
    }

    const redirect = () => {
      setCredentials(null);
      const agencyname = getuserdata.agencyname;
      navigate(`/agencyapplications`);
    }


  return (
    <>
        {/*credentials && <NavLink className="nav-link active" aria-current="page" to="/agencyapplications">Show applications submitted for my agency</NavLink>*/}
        {/* {<button className='logout_btn' onClick={redirect}>Show Applications</button>}
        {<button className='logout_btn' onClick={logout}>Logout</button>} */}

        <div>
            <button type="submit" className="btn btn-dark btn-lg my-5 mx-3" onClick={redirect}>Show Applications</button>
            <button type="submit" className="btn btn-dark btn-lg my-5" onClick={logout}>Logout</button>
        </div>
    </>
  )
}

export default Agencydashboard;