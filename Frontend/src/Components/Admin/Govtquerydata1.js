import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Govtquerydata = () => {

    const navigate = useNavigate();

    const [getuserdata, setData] = useState([]);
    const [searchApiData1,setSearchApiData1] = useState([]);
    const [filterVal1,setFilterVal1] = useState(''); 

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
            setData(data);
            setSearchApiData1(data);
        }
    }
    
    let filterResult;
    const handleFilter1=(e)=>{
        if(e.target.value==''){
            setData(searchApiData1);
        }
        else
        {
             filterResult = searchApiData1.filter(item => item.fname.toLowerCase().includes(e.target.value.toLowerCase())
            || item.gender.toLowerCase().includes(e.target.value.toLowerCase())
            || item.caste.toLowerCase().includes(e.target.value.toLowerCase())
            || item.income.toLowerCase().includes(e.target.value.toLowerCase())
            || item.city.toLowerCase().includes(e.target.value.toLowerCase())
            || item.state.toLowerCase().includes(e.target.value.toLowerCase()));

            setData(filterResult);
        }

        setFilterVal1(e.target.value);

    }

    useEffect(() => {
     getdata();
    }, [])

    return (

        <div className='container'>

            <div>
                <div>
                    <input className='my-4 mx-2' style={{width:"200px",height:"40px"}} placeholder='  Search' value={filterVal1} onInput={(e)=>handleFilter1(e)}/>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">First Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Caste</th>
                        <th scope="col">State</th>
                        <th scope="col">City</th>
                        <th scope="col">phone</th>
                        <th scope="col">Income</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        getuserdata.map(item => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.fname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.caste}</td>
                                        <td>{item.state}</td>
                                        <td>{item.city}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.income}</td>
                                        
                                    </tr>
                                </>
                            )
                        })

                    }



                </tbody>
            </table>


        </div>

    )
}

export default Govtquerydata;