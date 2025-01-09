import React, { useState } from "react";
import "./signup.css";
import toast from "react-hot-toast";
import Button1 from "../../components/buttons/Button1";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate()

//   console.log('formData', formData)

  const validateField = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if(formData.email == "") {
        toast.error("Email is required");
    }
    else if(!emailRegex.test(formData.email)){
        toast.error("Invalid email address");
    }
    else if(formData.password == "") {
        toast.error("Password is required");
    }
    else if(formData.password.length < 7) {
        toast.error("Password should be 8 character long");
    }
    else {
        localStorage.setItem('user', formData.name)
        localStorage.getItem('email', formData.email)
        localStorage.setItem('login', "true")
        toast.success('Logged-in successfully')
        navigate('/about-us')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField()
  };

  return (
    <div className="row bg-white" style={{ margin: 0, padding: 0}}>
      <div className="col-md-6 login-container">
        <div className="container " style={{overflow: "hidden", maxWidth: '55%'}}>
          <h1 className="login-heading">Login To Daltin</h1>
          <form >
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="auth-options">
                <div className="remember-me">
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
            </div>
            <Button1 value="Register Now" handleClick={handleSubmit} /> 
          </form>
          <div className="divider-container">
            <hr className="divider-line" />
            <span className="divider-text text-primary">OR</span>
            <hr className="divider-line" />
         </div>
          {/* Add social login buttons here */}
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 social-icon m-2">
                <img src="./google.svg" alt="" style={{width: '32px', height: '32px'}} />
            </div>
            <div className="col-md-5 social-icon m-2">
                <img src="./apple.svg" alt="" style={{width: '32px', height: '32px'}} />
            </div>
            <p>
                Don’t have an account yet? <Link to="/register" className="fw-bold" style={{textDecoration: 'none'}}>Register</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6" style={{ margin: 0, padding: 0 }}>
        <div
          style={{ overflow: "hidden", height: "100vh", margin: 0, padding: 0 }}
        >
          <img
            src="./loginPage2.svg"
            alt=""
            style={{
              width: "100%", // Ensure the image fills the width of the container
              height: "auto", // Maintain aspect ratio
              maxHeight: "100vh", // Limit the height to the viewport height
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
