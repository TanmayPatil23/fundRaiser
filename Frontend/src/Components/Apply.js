import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Apply = () => {

    const navigate = useNavigate();

    const [inpval,setINP] = useState({
        fname:"",
        lname:"",
        faname:"",
        moname:"",
        age:"",
        gender:"",
        caste:"",
        income:"",
        udid:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        pin:"",
        state:"",


        temp1:"",
        temp2:"",
        temp3:"",
        temp4:"",
        temp5:""
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
        
        const {fname,lname,faname,moname,age,gender,caste,income,udid,email,phone,address,city,pin,state} = inpval;

        const temp1 = false;
        const temp2 = false;
        const temp3 = false;
        const temp4 = false;
        const temp5 = false;


        const res = await fetch("/apply",{
            method : "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                fname,lname,faname,moname,age,gender,caste,income,udid,email,phone,address,city,pin,state,temp1,temp2,temp3,temp4,temp5
            })
        });

        const data = await res.json();
        
        if(res.status === 404 || !data)
        {
            alert("error");
            console.log("error in apply data adding");
        }
        else
        {
            alert("Data added");
            console.log("data added");    
            navigate("/");
        }
    }

    return (
        <div className='container'>
                
            <div>
                <form>
                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6 my-3 mb-4">
                            <h1>Application Form</h1>
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Applicant's First Name *</label>
                            <input type="text" onChange={setData} value={inpval.fname} placeholder="First Name" name="fname" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Applicant's Last Name *</label>
                            <input type="text" onChange={setData} value={inpval.lname} placeholder="Last Name" name="lname" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Father's Name *</label>
                            <input type="text" onChange={setData} value={inpval.faname} placeholder="Father's Name" name="faname" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Mother's Name *</label>
                            <input type="text" onChange={setData} value={inpval.moname} placeholder="Mother's Name" name="moname" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Applicant's Age*</label>
                            <input type="text" onChange={setData} value={inpval.age} placeholder="Age" name="age" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Gender*</label>
                            <input type="text" onChange={setData} value={inpval.gender} placeholder="Gender" name="gender" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Category*</label>
                            <input type="text" onChange={setData} value={inpval.caste} placeholder="Category" name="caste" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Monthly Income*</label>
                            <input type="text" onChange={setData} value={inpval.income} placeholder="Income" name="income" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">UDID Number*</label>
                            <input type="text" onChange={setData} value={inpval.udid} placeholder="UDID Number" name="udid" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Email Id</label>
                            <input type="text" onChange={setData} value={inpval.email} placeholder="Email" name="email" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Contact Number*</label>
                            <input type="text" onChange={setData} value={inpval.phone} placeholder="Phone" name="phone" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Permanent Address*</label>
                            <input type="text" onChange={setData} value={inpval.address} placeholder="Address" name="address" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">City*</label>
                            <input type="text" onChange={setData} value={inpval.city} placeholder="City" name="city" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">Pin Code*</label>
                            <input type="text" onChange={setData} value={inpval.pin} placeholder="Pin" name="pin" class="form-control" />
                        </div>
                    </div>

                    <div class="mb-3 mx-auto inputArea">
                        <div class="col-md-6">
                            <label className="form-label">State*</label>
                            <input type="text" onChange={setData} value={inpval.state} placeholder="State" name="state" class="form-control" />
                        </div>
                    </div>

                    <div class="col-md-6 my-3">
                        <button type="submit" onClick={addinpdata} class="btn btn-primary btn-lg">
                            Apply
                        </button>
                    </div>

                </form>
            </div>


            {/* 
                   
                   
                    <div class="form-group row">
                        <label for="phone_number" class="col-md-4 col-form-label text-md-right">Upload Profile</label>
                        <div class="col-md-6">
                            <input type="file"  name="testImage" class="form-control"/>
                        </div>
                    </div>
                   
                   <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right"> Applicant
                            Father's Name *</label>
                        <div class="col-md-6">
                            <input type="text" id="full_name" class="form-control" name="full-name"
                                value="Enter the Name" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="email_address" class="col-md-4 col-form-label text-md-right">Date of
                            Birth *</label>
                        <div class="col-md-6">
                            <input type="date" id="email_address" class="form-control" name="email-address" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Select Gender</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Select Gender--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>

                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="phone_number" class="col-md-4 col-form-label text-md-right">Mobile
                            Number*</label>
                        <div class="col-md-6">
                            <input type="text" id="phone_number" class="form-control" value="+91" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="full_name" class="col-md-4 col-form-label text-md-right"> Email-Id
                        </label>
                        <div class="col-md-6">
                            <input type="email" id="full_name" class="form-control" name="full-name"
                                value="abc@xyz.com" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Present
                            Address*</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Enter Address" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Permanent
                            Address</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Address" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Pincode</label>
                        <div class="col-md-6">
                            <input type="number" id="present_address" class="form-control" value="Enter 6 digit number" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Village/Block</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Enter Village/Block" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">District/Tehsil</label>
                        <div class="col-md-6">
                            <input type="text" id="present_address" class="form-control" value="Enter District/Tehsil" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Select State</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Select State--</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chattisgarh">Chattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Maghalaya">Maghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttrakhand</option>
                                <option value="West Bengal">West Bengal</option>

                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Type of Disability*</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Select Type of Disability--</option>
                                <option value="Andhra Pradesh">Visual Impairment</option>
                                <option value="Arunachal Pradesh">Hearing Impairment</option>
                                <option value="Assam">Loco motor Impairment</option>
                                <option value="Bihar">Mental Illness</option>
                                <option value="Goa">Children with Learning Disabilities</option>
                                <option value="Chattisgarh">Other</option>


                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="present_address" class="col-md-4 col-form-label text-md-right">Employment Status</label>
                        <div class="col-md-6">
                            <select data-placeholder="Choose country" class="C_Country_Modal form-control" id="C_Country" name="C_Country" data-bv-field="C_Country">
                                <option value="">--Are you Employed--</option>
                                <option value="Andhra Pradesh">Yes</option>
                                <option value="Arunachal Pradesh">No</option>

                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="nid_number" class="col-md-4 col-form-label text-md-right"><abbr
                            title="National Id Card">UDID</abbr> Number*</label>
                        <div class="col-md-6">
                            <input type="text" id="nid_number" class="form-control" name="nid-number" value="Enter UDID Number" />
                        </div>
                    </div>


                    <div class="form-group row">
                        <label for="phone_number" class="col-md-4 col-form-label text-md-right">UDID Proof*</label>
                        <div class="col-md-6">
                            <input type="file" id="phone_number" class="form-control" value="" />
                        </div>
                    </div>
                    */}




        </div>
    )
}

export default Apply