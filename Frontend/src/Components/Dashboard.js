import React, {useContext,useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { CredentialsContext } from '../App';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {


    const [credentials, setCredentials] = useContext(CredentialsContext);

    const logout = () => {
        setCredentials(null);
        navigate("/");
      }

      const {udid} = useParams("");
      const [getuserdata, setUserdata] = useState([]);
  
      const getdata = async () => {
      const res = await fetch(`/dashboard`, {
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


    const navigate=useNavigate();

    const apply = () => {
        navigate("/apply");
    }

    const opennew = () => {
      navigate("/agencyapplyform");
  }

  return (
    <>
        
        {
          <button type="submit" className="btn btn-dark btn-lg my-4 mx-4" onClick={opennew}>Add Your Company</button> 
        }
        
        {
          <div className='form_btn form_container'>
          <button className='btn btn-dark mx-4 my-4' onClick={logout}>Logout</button>
          </div>
        }
    </>
  )
}

export default Dashboard;