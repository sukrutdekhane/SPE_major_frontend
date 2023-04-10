import Container from '../container'
import React from 'react'
import Title from '../form/Title'
import Forminput from '../form/Forminput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'


export default function Signup() {
 
return <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
    <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
           <Title> Sign up</Title>
          <Forminput label="First Name" placeholder="Sukrut" name="name" />
          <Forminput label="Last Name" placeholder="Dekhane" name="name" />
          <Forminput label="Phone Number" placeholder="0123456789" name="phone number" />
          <Forminput label="Email" placeholder="john@example.com" name="email" />
          <Forminput label="Password" placeholder="********" name="password" />
          <Submit value="Sign up" />
          <div className="flex justify-between">
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/forget-password" >Forget Password</CustomLink>
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signin" >Sign in</CustomLink>
          </div>
        </form>
    </Container>
</div>
  
}
