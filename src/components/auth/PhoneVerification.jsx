import React, { isValidElement } from 'react'
import Container from '../container'
import Title from '../form/Title';
import Submit from '../form/Submit';
import { useState,useEffect,useRef} from "react";
import FormContainer from '../form/FormContainer';
import { commonModalClasses } from '../../utils/theme';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
 import { verifyUser } from '../../api/auth';
 import Signup from './Signup';
 

const OTP_LENGTH=6;

const isValidOTP=(otp)=>{
  let valid = false;
  for(let val of otp){
    valid=!isNaN(parseInt(val))
    if(!valid) break;
  }
  return valid;
}


let currentOTPIndex;
export default function PhoneVerification() {
  const [otp,setOtp]=useState(new Array(OTP_LENGTH).fill(""))
  const[activeOtpIndex,setActiveOtpIndex]=useState(0);
  
  const inputRef=useRef()

  const {state}=useLocation()
  const user= state?.user     //user will contain otp.

  const navigate=useNavigate()

  const focusNextInputField=(index)=>{
    setActiveOtpIndex(index+1)
  }

  const focusPrevInputField=(index)=>{
    let nextIndex;
        const diff=index-1
        nextIndex= diff!==0?diff:0
    setActiveOtpIndex(nextIndex)
  }

  const handleOtpChange = ({target}) => { 
      
      const{value}=target;
      const newOtp=[...otp]
      newOtp[currentOTPIndex]=value.substring(value.length-1, value.length);
     
      if(!value) focusPrevInputField(currentOTPIndex)
      else
      focusNextInputField(currentOTPIndex)
      
      
      setOtp([...newOtp]);

      
      
};

const handleKeyDown = ({ key }, index) => {
  currentOTPIndex = index;
  if (key === "Backspace") {
      focusPrevInputField(currentOTPIndex);
   }
};

const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!isValidOTP(otp)){
        return console.log("Invalid OTP");
    }
    const userInfo = sessionStorage.getItem("UserInfo");
    let OTP = otp.join('');
    const {error,message} = await verifyUser({userInfo:userInfo,OTP: OTP})
    //submit otp
}
 
useEffect(()=>{
    inputRef.current?.focus()
 },[activeOtpIndex]);

// useEffect(()=>{
//    if(!user)
//    navigate('/not-found')
// },[user])

//  if(!user){
//   return null;
//  }
  return (
    <FormContainer>
    <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses}>
           <div>
           <Title> Please enter the OTP to verify your account</Title>
           <p className="text-center dark:text-dark-subtle text-light-subtle">OTP has been sent to your email</p>
           </div>
           <div className="flex justify-center items-center space-x-4">
          {otp.map((_, index) => {
            return(
               <input
               ref={activeOtpIndex===index? inputRef : null}
               key={index}
                type="number" 
                value={otp[index] || ""}
                onChange={handleOtpChange}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                className= "w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary  rounded bg-transparent outline-none text-center dark:text-white text-primary font-semibold text-xl"/>
            );
          })}
          </div>
          <Submit value="Verify Account" />
         
        </form>
    </Container>
</FormContainer>
  );
}
