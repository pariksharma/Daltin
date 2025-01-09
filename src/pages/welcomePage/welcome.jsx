import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Button1 from '../../components/buttons/Button1';
import './welcome.css'
import OTPInput from 'react-otp-input';

const Welcome = () => {

    const [formData, setFormData] = useState({
        name: "",
        middleName: "",
        email: "",
        phone: "",
      });
      const [userName, setUserName] = useState('')
      const [otpVerify, setOtpVerify] = useState(false)
      const [otp, setOtp] = useState('')
    
      const [errors, setErrors] = useState({});

      console.log('formData', formData)
      
      useEffect(() => {
        const user_name = localStorage.getItem('user');
        const mail_id = localStorage.getItem('email')
        setUserName(user_name)
        setFormData({...formData, name: user_name, email: mail_id})
      }, [])

    
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
        // if(formData.name == "") {
        //     toast.error("Name is required");
        // }
        // else if(formData.email == "") {
        //     toast.error("Email is required");
        // }
        // else if(!emailRegex.test(formData.email)){
        //     toast.error("Invalid email address");
        // }
        if(formData.phone == ""){
            toast.error("Phone number is required");
        }
        else if(!phoneRegex.test(formData.phone)) {
            toast.error("Invalid phone number");
        }
        // else if(formData.password == "") {
        //     toast.error("Password is required");
        // }
        // else if(formData.password.length < 7) {
        //     toast.error("Password should be 8 character long");
        // }
        // else if(formData.confirmPassword != formData.password){
        //     toast.error("Password and Confirm Password is not matched");
        // }
        else {
            localStorage.setItem('user', formData.name)
            toast.success("Otp will sent to your contact number")
            setOtpVerify(true)
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        validateField()
      }; 
      
      const VerifyNow = () => {
        if(otp.length != 6) {
            toast.error('Enter an valid OTP')
        }
        else {
            toast.success("Logged-in successfully")
            localStorage.setItem('login', "true")
            navigate('/about-us')
        }
      }

  return (<>
    {!otpVerify ? 
      <div className="container d-flex align-items-center " style={{height: '100vh'}}>
        <div className="container " style={{overflow: "hidden", maxWidth: '55%'}}>
          <h1 className="login-heading">{`Hey, ${userName}`}</h1>
          <p className="login-heading1">Let’s get to know you better so we can map out your perfect study journey</p>
          <form >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                disabled
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Middle Name (Optional)"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                disabled
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Primary Contact Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <Button1 value="Verify" handleClick={handleSubmit} /> 
          </form>
        </div>
      </div>
      :
      <div className="container d-flex align-items-center " style={{height: '100vh'}}>
      <div className="container " style={{overflow: "hidden", maxWidth: '55%'}}>
        <h1 className="login-heading">Verify Your Code</h1>
        <p className="">{`Enter the code you just received on your mobile number ending with ******${formData.phone.substring(7, formData.phone.length)}`}</p>
        <div className='otp d-flex justify-content-center'>
            <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
            />
        </div>
        <div className='d-flex justify-content-center'>
            <Button1 value="Verify Now" handleClick={VerifyNow} />
        </div>
      </div>
    </div>
    }
  </>)
}

export default Welcome