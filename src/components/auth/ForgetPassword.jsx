import Container from '../container'
import React from 'react'
import Title from '../form/Title';
import Forminput from '../form/Forminput';
import Submit from '../form/Submit';
import CustomLink from '../CustomLink';

export default function ForgetPassword() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
    <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
           <Title> Please enter your email</Title>
          <Forminput label="Email" placeholder="john@example.com" name="email" />
        
          <Submit value="Send Link" />
          <div className="flex justify-between">
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signin" >Sign in</CustomLink>
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signup" >Sign up</CustomLink>
           
          </div>
        </form>
    </Container>
</div>
  );
}
