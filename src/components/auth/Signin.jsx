import Container from '../container'
import Title from '../form/Title'
import Forminput from '../form/Forminput'
import Submit from '../form/Submit'
import CustomLink from '../CustomLink'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'



export default function Signin() {

return (
 <FormContainer>
    <Container>
        <form className={commonModalClasses+ " w-72"}>
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
</FormContainer>
);
}
