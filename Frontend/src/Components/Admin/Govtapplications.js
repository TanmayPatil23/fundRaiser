import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Govtapplications = () => {
  const [getuserdata, setUserdata] = useState([]);

  const getdata = async (e) => {
    const res = await fetch("http://localhost:5000//govtapplications", {
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

  const navigate=useNavigate();

  const open1 = () => {
      navigate("/govtaddagency");
  }

  const open2 = () => {
    navigate("/govtqueries");
  }

  const open3 = () => {
    navigate("/showapplications");
  }

  const open4 = () => {
    navigate("/govtquerydata1");
  }
  
  const open5 = () => {
    navigate("/agencies");
  }
  return (
    <div>

      <div className="mt-5">
        <div className="container">

          <h2>Applications for the registration as Implimenting Agencies</h2>
          <div className="add_btn mt-2 float-right">
            <button className="btn btn-primary my-2" onClick={open1}><i className='fas fa-plus'></i> Add New Agency</button>
          </div>

          <div className="add_btn mt-2 float-right">
            <button className="btn btn-primary my-2 mx-2" onClick={open2}><i class=''></i>Open Queries</button>
          </div>

          <div className="add_btn mt-2 float-right">
            <button className="btn btn-primary my-2 mx-2" onClick={open3}><i class=''></i>All Applications</button>
          </div>

          <div className="add_btn mt-2 float-right">
            <button className="btn btn-primary my-2 mx-2" onClick={open4}><i class=''></i>Query Data</button>
          </div>

          <div className="add_btn mt-2 float-right">
            <button className="btn btn-primary my-2 mx-2" onClick={open5}><i class=''></i>View Agencies</button>
          </div>

          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Organisation Type</th>
                <th scope="col">Organisation Name</th>
                <th scope="col">Website</th>
                <th scope="col">Address</th>
                <th scope="col">District</th>
                <th scope="col">Pin</th>
                <th scope="col">Email</th>
                <th scope="col">Founded</th>
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
                        <td>{element.type}</td>
                        <td>{element.name}</td>
                        <td>{element.website}</td>
                        <td>{element.address}</td>
                        <td>{element.district}</td>
                        <td>{element.pin}</td>
                        <td>{element.email}</td>
                        <td>{element.year}</td>
                        <td className="d-flex justify-content-between">
                          <Link to={`/govtdetails/${element._id}`} className="btn btn-success mx-2"><i className='fas fa-eye'></i></Link>
                          <button className="btn btn-primary"><i className='fas fa-trash'></i></button>
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

export default Govtapplications;
