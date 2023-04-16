import React from 'react'
import Container from '../container'
import Title from '../form/Title';
import Forminput from '../form/Forminput';
import Submit from '../form/Submit';

export default function ConfirmPassword() {
  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
    <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
           <Title>Enter new password</Title>
          <Forminput label="New Password" placeholder="********" name="password" type='password'/>
          <Forminput label="Confirm Password" placeholder="********" name="confirmPassword" type='password'/>
          <Submit value="Confirm Password" />
        </form>
    </Container>
</div>
  );
}
