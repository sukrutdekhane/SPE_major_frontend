import Container from '../container'
import React from 'react'
import Title from '../form/Title';
import Forminput from '../form/Forminput';
import Submit from '../form/Submit';
import CustomLink from '../CustomLink';
import FormContainer from '../form/FormContainer';
import { commonModalClasses } from '../../utils/theme';

export default function ForgetPassword() {
  return (
    <FormContainer>
    <Container>
        <form className={commonModalClasses + " w-96"}>
           <Title> Please enter your email</Title>
          <Forminput label="Email" placeholder="john@example.com" name="email" />
        
          <Submit value="Send Link" />
          <div className="flex justify-between">
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signin" >Sign in</CustomLink>
          <CustomLink className="text-dark-subtle hover:text-white transition" to="/auth/signup" >Sign up</CustomLink>
           
          </div>
        </form>
    </Container>
</FormContainer>
  );
}
