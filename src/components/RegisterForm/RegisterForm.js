import { ErrorMessage, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Container,
  Input,
  Label,
  Link,
  StyledBtn,
  TextContainer,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <Container>
          <h2>Register</h2>

          <Label htmlFor="name">
            Username
            <Input type="text" id="name" name="name" />
            <ErrorMessage component="div" name="name" />
          </Label>

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

          <StyledBtn type="submit">Register</StyledBtn>
          <TextContainer>
            <p>Have an account?</p>
            <Link to="/login">Login</Link>
          </TextContainer>
        </Container>
      </Form>
    </Formik>
  );
};
