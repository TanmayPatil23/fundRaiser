import React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Building from '../../Images/building.jpg';
import "../../Components/Styles/details.css";
import { useParams } from 'react-router-dom';

const Govtdetails = () => {

    const {id} = useParams("");
    const [getuserdata, setUserdata] = useState([]);

    const getdata = async () => {
    const res = await fetch(`http://localhost:5000/showdetails/${id}`, {
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

    return (

        <div className='container mt-3'>
            <h1 className='my-3' style={{ fontWeight: 400 }}>  Organization Name :  <span>{getuserdata.name}</span></h1>
            <Card sx={{ maxWidth: 600 }}>
                <CardContent>

                    <div className='row'>
                        <div className='left_view col-lg-6 col-md col-12'>
                            <img src={Building} style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Type : <span>{getuserdata.type}</span></h3>
                            <h3 className='mt-3'>Website  : <span>{getuserdata.website}</span></h3>
                            <p>Email : <span>{getuserdata.email}</span></p>
                        </div>
                        <div className='right_view col-lg-6 col-md col-12 mt-5'>
                            <p className='mt-3'>Mobile : <span>{getuserdata.phone}</span></p>
                            <p className='mt-3'>Location : <span>{getuserdata.state}</span></p>                            
                            <p className='mt-3'>Description : <span>{getuserdata.desc}</span></p>
                        </div>
                    </div>

            </CardContent>
        </Card>
    </div>

  )
}

export default Govtdetails;