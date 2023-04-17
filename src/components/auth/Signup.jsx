import Container from '../container'
import React, { useState } from 'react'
import Title from '../form/Title'
import Forminput from '../form/Forminput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'

const validateUserInfo = ({first_name,last_name,phone_number,email,password}) => {
    const validPhoneNumber =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const validName=/^[a-zA-Z]+$/;
   if(!first_name.trim())
   return {ok: false, error: "First name is required"};

   if(!validName.test(first_name))
   return {ok: false, error: "Invalid First Name"};

   if(!last_name.trim())
   return {ok: false, error: "Last name is required"};

   
   if(!validName.test(last_name))
   return {ok: false, error: "Invalid Last Name"};

   if(!phone_number.trim())
   return {ok: false, error: "Phone number is required"};
   
   if(!validPhoneNumber.test(phone_number))
   return {ok: false, error: "Invalid Phone Number"};

   if(!email.trim())
   return {ok: false, error: "Email is required"};

   if(!validEmail.test(email))
   return {ok: false, error: "Invalid Email"};

   if(!password.trim())
    return {ok: false, error: "Password is required"};
   
   if(password.length<8)
   return {ok: false, error: "Password must be at least 8 characters long"};
    
   return {ok: true};
}
export default function Signup() {
  const[userInfo,setUserInfo] =useState({
    first_name:"",
    last_name:"",
    phone_number:"",
    email:"",
    password:"",
  });

  const handleChange = ({target}) =>{
    const {value,name} = target;
    setUserInfo({...userInfo, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const{ok,error}=validateUserInfo(userInfo);
    if(!ok)
    console.log(error);

    console.log(userInfo);
  }

  const {first_name,last_name,phone_number,email,password}=userInfo
return <FormContainer>
    <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses+" w-72"}>
           <Title> Sign up</Title>
          <Forminput value={first_name} onChange={handleChange} label="First Name" placeholder="Sukrut" name="first_name" />
          <Forminput value={last_name}  onChange={handleChange} label="Last Name" placeholder="Dekhane" name="last_name" />
          <Forminput value={phone_number}  onChange={handleChange} label="Phone Number" placeholder="0123456789" name="phone_number" />
          <Forminput value={email}  onChange={handleChange} label="Email" placeholder="john@example.com" name="email" />
          <Forminput value={password}  onChange={handleChange} label="Password" placeholder="********" name="password" type="password" />
          <Submit value="Sign up" />
          <div className="flex justify-between">
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/forget-password" >Forget Password</CustomLink>
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signin" >Sign in</CustomLink>
          </div>
        </form>
    </Container>
</FormContainer>
  
}
