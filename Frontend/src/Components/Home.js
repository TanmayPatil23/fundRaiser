import React from 'react';
import investor from "../Images/investor.png";
import startup from "../Images/startup.jpg";
import '../Components/Styles/noodle.css'
import { useNavigate } from 'react-router-dom';

  
const Home = () => {

  const navigate=useNavigate();

  const open1 = () => {
    navigate("/options");
  }

  const open2 = () => {
    navigate("/agencylogin");
  }

  return (
    <>

      <div class="wrapper1">
          <div class="container1">
              <div class="ima">I am a ...</div>
              <div class="nnn">
                  <div class="ttt">
                      <img className='img1' src={investor} alt="img" onClick={open2} />
                      <h2>Investor</h2>
                  </div>
                  <div class="ttt">
                      <img className='img1' src={startup} alt="img" onClick={open1} />
                      <h2>Startup Owner</h2>
                  </div>
              </div>
          </div>
      </div>



    </>
  )
}

export default Home