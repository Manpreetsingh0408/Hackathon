import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [signupdata,setSignUpData] =useState({
    username:"",
    email:"",
    password:""
  })
  const [logindata,setLoginData] =useState({
    email:"",
    password:""
  })

  const handleSignupChange=(e)=>{
    const {name,value}=e.target;
    setSignUpData({
      ...signupdata,
      [name]:value
    })
  }
  const handleLoginChange=(e)=>{
    const {name,value}=e.target;
    setLoginData({
      ...logindata,
      [name]:value
    })
  }


  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/data/signup", {
        username: signupdata.username,
        email:signupdata.email,
        password: signupdata.password
      });
      console.log(response)

    } catch (error) {
      console.error(error);
    }
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/data/login", {
        email:logindata.email,
        password: logindata.password
      });
      console.log(response)

    } catch (error) {
      console.error(error);
    }
  };

  const switchToSignUp = () => {
    setIsSignup(true);
  };

  const switchToSignIn = () => {
    setIsSignup(false);
  };

  return (
    <div>
      <div
        className={`container ${isSignup ? "cont-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input name="username" onChange={handleSignupChange} type="text" placeholder="Name" />
            <input name="email" onChange={handleSignupChange} type="email" placeholder="Email" />
            <input name="password" onChange={handleSignupChange} type="password" placeholder="Password" />
            <button onClick={handleSignupSubmit}>Sign Up</button>
          </form>
        </div>
        <div className="form-container log-in-container">
          <form action="">
            <h1>Log In</h1>
            <span>or use your account</span>
            <input name="email" onChange={handleLoginChange} type="email" placeholder="Email" />
            <input name="password" onChange={handleLoginChange} type="password" placeholder="Password" />
            <button onClick={handleLoginSubmit}>Log In</button>
          </form>
        </div>
        <div className="moving-container">
          <div className="moving">
            <div className="moving-panel moving-left">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="outline" onClick={switchToSignIn} id="signIn">
                Log In
              </button>
            </div>
            <div className="moving-panel moving-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="outline" onClick={switchToSignUp} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
