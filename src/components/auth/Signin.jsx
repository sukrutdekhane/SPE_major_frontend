import Container from '../container'
import React from 'react'
import Title from '../form/Title'
import Forminput from '../form/Forminput'
import Submit from '../form/Submit'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink'


export default function Signin() {
 
return (
 <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
    <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
           <Title> Sign in</Title>
          <Forminput label="Email" placeholder="john@example.com" name="email" />
          <Forminput label="Password" placeholder="********" name="password" />
          <Submit value="Sign in" />
          <div className="flex justify-between">
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/forget-password" >Forget Password</CustomLink>
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signup" >Sign up</CustomLink>
           
          </div>
        </form>
    </Container>
</div>
);
}
