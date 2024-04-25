import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./StudentProfile.css";
import Parent from "./Parent";
import Teacher from "./Teacher";
import Footer from "./Footer";
import background1 from "../images/background1.jpg";

function StudentProfile   ()  {
  const [studusername ,setStudUsername] = useState('');
  const [studpassword, setStudPassword] = useState('');
  const [error] = useState('');
  const navigate = useNavigate();
 
  const  handleSubmit = async (e) =>{
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:3001/login" , {
         stud_username : studusername ,
          stud_password : studpassword 
        });
        if(res.data.success){
          navigate( "/profile");
    } }catch(error) {
       alert(" error check data");
  }
    };
  const [showParent, setShowParent] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(true);

  const toggleParent = () => {
    setShowParent(true);
    setShowTeacher(false);
    setShowStudentForm(false);
  };

  const toggleTeacher = () => {
    setShowParent(false);
    setShowTeacher(true);
    setShowStudentForm(false);
  };

  const toggleStudent = () => {
    setShowParent(false);
    setShowTeacher(false);
    setShowStudentForm(true);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img className="my-logo" src={background1} alt="" />
      </div>

      <div className="content-info">
        <div className="left-div">
          <button
            className="student-button btn"
            type="submit"
            onClick={toggleStudent}
          >
            Student
          </button>
        </div>
        <div className="mid-div">
          <button
            className="parent-button btn"
            type="submit"
            onClick={toggleParent}
          >
            Parent
          </button>
        </div>
        <div className="right-div">
          <button
            className="teacher-button btn"
            type="submit"
            onClick={toggleTeacher}
          >
            Teacher
          </button>
        </div>
      </div>

      {showParent && <Parent showParent={showParent} />}
      {showTeacher && <Teacher showTeacher={showTeacher} />}

      <div
        style={{ display: showStudentForm ? "block" : "none" }}
        className="form-container"
      >
        <div className="form-group">
          {showStudentForm && (
            <form action="#" onSubmit={handleSubmit} >
              <div className="login-form">
                <div className="input">
                  <label htmlFor="schoolcode"></label>
                  <input
                    type="text"
                    name="schoolcode"
                    id="schoolcode"
                    placeholder="School code / Domain"
                  />
                </div>
                <div className="input ">
                  <label htmlFor="email/mobile"></label>
                  <input
                  htmlFor="stud_username"
                    type="text"
                    name="stud_username"
                    id="stud_username"
                    value={studusername}
                    onChange={(e) => setStudUsername(e.target.value)}
                    placeholder="Username(Mobile/Email)"
                  />
                </div>
                <div className="input">
                  <label htmlFor="password>"></label>
                  <input
                  htmlFor="stud_password"
                    type="password"
                    name="stud_password"
                    id="stud_password"
                    value={studpassword}
                    onChange={(e) => setStudPassword(e.target.value)}
                   placeholder="Password / OTP"
                  />
                </div>
                <div className="forget-password">
                 
                  <a href="#">Forget Password ?</a>
                </div>
              </div>
              <div className="user-login">
                <button className="signIn-button" type="submit">
                  SIGN IN
                </button>
                <a className="goggle-link" href="#">
                  Login with Google
                  <i class="ri-google-fill"></i>
                </a>
              </div>

              <div className="query">
                <a href="#">HOW TO LOGIN?</a>
              </div>
            </form>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>

      <div className="footer">
      
        <h1>Powered by</h1>
        <h2>DreamsGuider.com</h2> 
         <h3>Software | Education | Advertising</h3>
      </div>
    </div>
  );
};

export default StudentProfile;
