import React from 'react'
import Container from '../container'
import Title from '../form/Title';
import Forminput from '../form/Forminput';
import Submit from '../form/Submit';
import FormContainer from '../form/FormContainer';
import { commonModalClasses } from '../../utils/theme';

export default function ConfirmPassword() {
  return (
    <FormContainer>
    <Container>
        <form className={commonModalClasses + " w-96"}>
           <Title>Enter new password</Title>
          <Forminput label="New Password" placeholder="********" name="password" type='password'/>
          <Forminput label="Confirm Password" placeholder="********" name="confirmPassword" type='password'/>
          <Submit value="Confirm Password" />
        </form>
    </Container>
</FormContainer>
  );
}
