import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Govtaddagency = () => {

    const navigate = useNavigate();

    const [inpval,setINP] = useState({
        agencyname:"",
        username:"",
        password:""
    })
    
    const setData = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    
    const addinpdata = async(e)=>{
       
        e.preventDefault();
        
        const {agencyname,username,password} = inpval;
    
        const res = await fetch("/govtaddagency",{
            method : "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                agencyname,username,password
            })
        });
    
        const data = await res.json();
        
        if(res.status === 404 || !data)
        {
            alert("Error");
            console.log("Error in data adding");
        }
        else
        {
            alert("Data added");
            console.log("Data added");
        }
        navigate('/agencyapplications');    
    }
      

  return (
    
    <div className='form_page my-5 mx-5'>  
        <div className='form_container'>
            <form className="mt-4">

            <div className='shadow-lg p-3 mb-5 bg-white rounded' style={{width:500}}>
                <h1 classname="my-2"> New Investor Registration </h1>
                <div classname="my-3 mx-auto inputArea">
                    <label for="full_name" class="form-label">Full Name*</label>
                    <input type="text" onChange={setData} value={inpval.agencyname} placeholder="Your Name" name="agencyname" class="form-control" />
                </div>

                <div classname="my-3 mx-auto inputArea">
                    <label for="full_name" class="form-label">Username*</label>
                    <input type="text" onChange={setData} value={inpval.username} placeholder="Username" name="username" class="form-control" />
                </div>

                <div classname="my-3 mx-auto inputArea">
                    <label for="full_name" class="form-label">Password*</label>
                    <input type="password" onChange={setData} value={inpval.password} placeholder="Password" name="password" class="form-control" />
                </div>

                <div classname="mb-3 mx-auto inputArea">
                    <button type="submit" onClick={addinpdata} class="btn btn-danger my-3">
                        Add Credentials
                    </button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Govtaddagency;




