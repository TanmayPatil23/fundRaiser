import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { CredentialsContext } from '../../App';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Showapplications = () => {

  const [getuserdata, setUserdata] = useState([]);

  const navigate = useNavigate();

  const getdata = async (e) => {
    const res = await fetch("/agencyapplications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      console.log("Error in data fetch");
    }
    else {
      setUserdata(data);
      console.log("Data Fetched");
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  return (

    <div>

      <div className="mt-5">
        <div className="container">

          <h1>All Applications Submitted</h1>
          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Pincode</th>
                <th scope="col">UDID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {
                getuserdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{element.fname}</td>
                        <td>{element.age}</td>
                        <td>{element.gender}</td>
                        <td>{element.phone}</td>
                        <td>{element.email}</td>
                        <td>{element.address}</td>
                        <td>{element.pin}</td>
                        <td>{element.udid}</td>
                        <td className="d-flex justify-content-between">
                          <Link to={`/details/${element._id}`} className="btn btn-success"><i className='fas fa-eye'></i></Link>
                          <Link to={`/response/${element._id}`} className="btn btn-primary"><i className='fas fa-bell'></i></Link>
                        </td>
                      </tr>
                    </>
                  )
                })


              }



            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}

export default Showapplications;