import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="logo-container d-flex justify-content-center align-items-center">
        <img
          className="contact-img"
          src="https://seeklogo.com/images/F/flying-eagle-logo-2E9D76DEDE-seeklogo.com.png"
          alt="logo"
        />
      </div>
      <center>
        <div className="para">
          Devara is a passionate entrepreneur and tech enthusiast who recognized the growing demand for convenient transportation solutions. 
          With a background in software development and a keen interest in the automotive industry, he created an
          innovative app designed to streamline the process of renting and buying vehicles, from bicycles to cars. 
          Vara believes in making mobility accessible to everyone and aims to connect users with a diverse range of vehicles
          tailored to their needs. Through his vision,
          the app not only simplifies the rental experience but also fosters a community of vehicle enthusiasts.
        </div>
      </center>
      <div className="contact-info" id="contact">
        <center>
          <h1>Contact Us</h1>
        </center>
        <div className="sub">
          <div className="sub-con">
            <center>
              <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwGwaGwZo8SFVixeFV8jyTeQTt8MeYG1UlQ&s" height="50px" width="50" alt="Email Icon"/>
            </center>
            <a href="mailto:mojukumar2002@gmail.com">youtube.com</a>
          </div>
          <div className="sub-con">
            <center>
              <img className="icon" src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png" height="50px" width="50" alt="Phone Icon"/>
            </center>
            <p>8932874635</p>
          </div>
          <div className="sub-con">
            <center>
              <img className="icon" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" height="50px" width="50" alt="Twitter Icon"/>
            </center>
            <a href="https://x.com/i/flow/login">twitter.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
