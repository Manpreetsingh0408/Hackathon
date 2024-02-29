import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

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
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container log-in-container">
          <form action="#">
            <h1>Log In</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
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
