import React, {useContext} from 'react';
import { useState, useEffect } from 'react';
import { CredentialsContext } from '../../App';
import { Link } from 'react-router-dom';
import { NavLink , useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Cards from '../cards';

{/*
const Agencyapplications = () => {

  const {agencyname} = useParams("");

  const [getuserdata, setUserdata] = useState([]);

  const navigate=useNavigate();

  const [credentials, setCredentials] = useContext(CredentialsContext);

  const logout = () => {
    setCredentials(null);
    navigate("/");
  }

  const getdata = async (e) => {
    const res = await fetch("/agencyapplications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();

    if (res.status === 404 || !data) {
      console.log("error in data fetch");
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

      {credentials && <button className='logout_btn' onClick={logout}>Logout</button>}

      <div className="mt-5">
        <div className="container">

         <h1>Appliations submitted for the respective implimenting agency by PWD's</h1>
          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Income</th>
                <th scope="col">Phone</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">UDID</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Pincode</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {
                getuserdata.map((element, id) => {
                  return (
                    <>
                      <tr>
                        <th scope="row">{id+1}</th>
                        <td>{element.fname+" "}{element.lname}</td>
                        <td>{element.income}</td>
                        <td>{element.phone}</td>
                        <td>{element.age}</td>
                        <td>{element.gender}</td>
                        <td>{element.udid}</td>
                        <td>{element.address}</td>
                        <td>{element.city}</td>
                        <td>{element.state}</td>
                        <td>{element.pin}</td>

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
}*/}




const arr = [{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
},{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
},{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
},{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
},{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
}
,{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
}
,{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
}
,{
  img:"",
  title: "Zomato",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est"
}]


function Agencyapplications() {


  const {agencyname} = useParams("");

  const [getuserdata, setUserdata] = useState([]);

  const navigate=useNavigate();

  const [credentials, setCredentials] = useContext(CredentialsContext);

  const logout = () => {
    setCredentials(null);
    navigate("/");
  }

  const getdata = async (e) => {
    const res = await fetch("http://localhost:5000/agencyapplications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();
    if (res.status === 404 || !data) {
      console.log("error in data fetch");
    }
    else {
      setUserdata(data);
      setSearchApiData1(data)
      console.log("Data Fetched");
    }
  }

  useEffect(() => {
    getdata();
    console.log(getuserdata);
  }, [])


  const [searchApiData1,setSearchApiData1] = useState([]);
  const [filterVal1,setFilterVal1] = useState('');

  let filterResult;
  const handleFilter1 = (e) => {
    if(e.target.value=='')
    {
      setUserdata(searchApiData1);
    }
    else
    {
       const a = e.target.value.toLowerCase()
       filterResult = searchApiData1.filter(item=>item.type.toLowerCase().includes(a)
                  ||  item.name.toLowerCase().includes(a)
                  ||  item.year.toLowerCase().includes(a)
                  ||  item.desc.toLowerCase().includes(a)
       );
       setUserdata(filterResult);
    }

    setFilterVal1(e.target.value);
  }



  return (
    <div className="App" style={{margin:'30px'}}>


            <div>
                <div>
                    <input className='my-4 mx-2' style={{width:"200px",height:"40px"}} placeholder='  Search' value={filterVal1} onInput={(e)=>handleFilter1(e)}/>
                </div>
            </div>


      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
      }}>Companies looking for funding</h1>

      <Container className='p-4'>
        <Row md="4"  >
          {getuserdata.map(d=>{
            return <Cards data={d}></Cards>
          })}
          
        </Row>
      </Container>
    </div>
  );
}



export default Agencyapplications;