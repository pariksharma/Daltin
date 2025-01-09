import React, { useState } from "react";
import "./loginPage.css";
import toast from "react-hot-toast";
import Button1 from "../../components/buttons/Button1";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // phone: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate()

//   console.log('formData', formData)

  const validateField = () => {
    let newErrors = { ...errors };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if(formData.name == "") {
        toast.error("Name is required");
    }
    else if(formData.email == "") {
        toast.error("Email is required");
    }
    else if(!emailRegex.test(formData.email)){
        toast.error("Invalid email address");
    }
    // else if(formData.phone == ""){
    //     toast.error("Phone number is required");
    // }
    // else if(!phoneRegex.test(formData.phone)) {
    //     toast.error("Invalid phone number");
    // }
    else if(formData.password == "") {
        toast.error("Password is required");
    }
    else if(formData.password.length < 7) {
        toast.error("Password should be 8 character long");
    }
    else if(formData.confirmPassword != formData.password){
        toast.error("Password and Confirm Password is not matched");
    }
    else {
        localStorage.setItem('user', formData.name)
        localStorage.setItem('email', formData.email)
        toast.success('Please, verify your contact number')
        navigate('/home')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateField()
  };

  return (
    <div className="row bg-white" style={{ margin: 0, padding: 0}}>
      <div className="col-md-6" style={{ margin: 0, padding: 0 }}>
        <div
          style={{ overflow: "hidden", height: "100vh", margin: 0, padding: 0 }}
        >
          <img
            src="./loginPage.svg"
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
      <div className="col-md-6 login-container">
        <div className="container " style={{overflow: "hidden", maxWidth: '55%'}}>
          <h1 className="login-heading">Create an Account</h1>
          <form >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
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
            {/* <div className="form-group">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div> */}
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
            <div className="form-group mb-2">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <Button1 value="Register Now" handleClick={handleSubmit} /> 
          </form>
          <p>
            Already have an account? <Link to="/login" className="fw-bold" style={{textDecoration: 'none'}}>Login Now</Link>
          </p>
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
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
