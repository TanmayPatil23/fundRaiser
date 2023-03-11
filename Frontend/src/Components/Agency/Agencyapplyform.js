import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom';

const Agencyapplyform = () => {

    const navigate=useNavigate();

    const [inpval,setINP] = useState({
        type:"",
        name:"",
        email:"",
        phone:"",
        website:"",
        address:"",
        district:"",
        state:"",
        pin:"",
        year:"",
        cin:"",
        pan:"",
        logo:"",
        desc:""
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
        
        const {type,name,email,phone,website,address,district,state,pin,year,cin,pan,desc} = inpval;

        const res = await fetch("/agencyapplyform",{
            method : "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                type,name,email,phone,website,address,district,state,pin,year,cin,pan,desc
            })
        });

        const data = await res.json();
        
        if(res.status === 404 || !data)
        {
            alert("error");
            console.log("Error in agencyapply data adding");
        }
        else
        {
            alert("Data added");
            console.log("data added");    
            navigate("/");
        }
    }


    // //for logo code
    // const [logo, setLogo] = useState()

    // function handleChange(event) {
    //   setLogo(event.target.files[0])
    // }
    
    async function handleSubmit(event) {
      event.preventDefault()
      const form = document.getElementById('logoForm')
      const formData = new FormData(form);
    //   formData.append('file', file);
    //   formData.append('fileName', file.name);
      
      const response = await fetch('/uploadLogo', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(formData) // body data type must match "Content-Type" header
      });
    //   const resp = await response.json()
      console.log(response);
    //   const temp = inpval
    //   temp.logo = response
    //   setINP(temp)
    //   console.log(inpval);

      
    }


    return (
        <div className='container'>
            <div>
                <h1 className='my-4'>Upload Company Details</h1>
            </div>
            {/* method="POST" action="/uploadImage" enctype="multipart/form-data" */}

            {/*<form id='logoForm'>
                <input type="file" name="company-logo"/>
                <button class="submit-btn" onClick={handleSubmit}>Upload</button>
            </form>*/}

            <form>
                <div className="row my-5">
                    
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Organisation Type</label>
                        <input onChange={setData} value={inpval.type} placeholder="Organisation Type / Domain" name="type" type="text" class="form-control"></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Organisation Name</label>
                        <input onChange={setData} value={inpval.name} placeholder="Company Name" name="name" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Email</label>
                        <input onChange={setData} value={inpval.email} placeholder="Email" name="email" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Phone</label>
                        <input onChange={setData} value={inpval.phone} placeholder="Phone" name="phone" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Website</label>
                        <input onChange={setData} value={inpval.website} placeholder="Website" name="website" type="text" class="form-control"></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Address</label>
                        <input onChange={setData} value={inpval.address} placeholder="Address" name="address" type="text" class="form-control"></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">District</label>
                        <input onChange={setData} value={inpval.district} placeholder="District" name="district" type="text" class="form-control"></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">State</label>
                        <input onChange={setData} value={inpval.state} placeholder="State" name="state" type="text" class="form-control"></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Pin</label>
                        <input onChange={setData} value={inpval.pin} placeholder="Pin" name="pin" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">Funding Required</label>
                        <input onChange={setData} value={inpval.year} placeholder="Amount in INR" name="year" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">CIN</label>
                        <input onChange={setData} value={inpval.cin} placeholder="CIN Number" name="cin" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label class="form-label">GSTIN Number</label>
                        <input onChange={setData} value={inpval.pan} placeholder="GSTIN Number" name="pan" type="text" class="form-control" ></input>
                    </div>

                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label class="form-label">Description</label>
                        <textarea onChange={setData} value={inpval.desc} placeholder="Business Plan or Other Information" name="desc" type="text" class="form-control" rows="5"></textarea>
                    </div>

                    <div class="form-group row">
                        <button type="submit" onClick={addinpdata} class="btn btn-primary">
                            Submit for Registration
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Agencyapplyform;