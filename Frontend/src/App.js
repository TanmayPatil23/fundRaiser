import React , { useState, createContext} from "react";
import { Routes, Route } from 'react-router-dom';
import connect2 from "./Images/connect2.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './Components/Styles/App.css';
import Navbar from "./Components/Navbar"
import Apply from "./Components/Apply"
import Footer from "./Components/Footer";
import Home from "./Components/Home"
import Options from "./Components/Options";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import Agencylogin from "./Components/Agency/Agencylogin";
import Agencyapplications from "./Components/Agency/Agencyapplications";
import Agencyapplyform from "./Components/Agency/Agencyapplyform";

import Govtlogin from "./Components/Admin/Govtlogin";
import Govtdetails from "./Components/Admin/Govtdetails";
import Dashboard from "./Components/Dashboard";
import Govtapplications from "./Components/Admin/Govtapplications";
import Govtaddagency from "./Components/Admin/Govtaddagency";
import Showapplications from "./Components/Admin/Showapplications";
import Addorg from "./Components/addorg";


const CredentialsContext = createContext();

const App = () => {
  const credentials = useState(null);

  return (
    <>
    <CredentialsContext.Provider value={credentials}>
    <img src={connect2} alt="connect2" />

  <Navbar />

  <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/govtlogin" element={<Govtlogin />} />
      <Route path="/agencylogin" element={<Agencylogin />} />
      <Route path="/signup" element={<Signup/>} /> 
      <Route exact path="/apply" element={<Apply/>} />
      <Route exact path="/agencyapplyform" element={<Agencyapplyform/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} /> 
      <Route exact path="/options" element={<Options/>} />
      <Route exact path="/govtapplications" element={<Govtapplications/>} />
      <Route exact path="/govtaddagency" element={<Govtaddagency/>} />
      <Route exact path="/showapplications" element={<Showapplications/>} />
      <Route exact path="/agencyapplications" element={<Agencyapplications/>} />
      <Route exact path="/showdetails/:id" element={<Govtdetails/>} />
      



      <Route exact path="/addorg" element={<Addorg/>} /> 
      
      </Routes>
 
  <Footer />
  </CredentialsContext.Provider>
  </>
  );
}

export default App;
export {CredentialsContext};
