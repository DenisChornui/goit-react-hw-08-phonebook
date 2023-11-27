import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Container,
  Input,
  Label,
  Link,
  StyledBtn,
  TextContainer,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <Container>
          <h2>Login</h2>
          <Label htmlFor="email">
            Email
            <Input type="email" id="email" name="email" />
            <ErrorMessage component="div" name="email" />
          </Label>

          <Label htmlFor="password">
            Password
            <Input type="password" id="password" name="password" />
            <ErrorMessage component="div" name="password" />
          </Label>

          <StyledBtn type="submit">Log In</StyledBtn>
          <TextContainer>
            <p>Do not have an account?</p>
            <Link to="/register">Register</Link>
          </TextContainer>
        </Container>
      </Form>
    </Formik>
  );
};
