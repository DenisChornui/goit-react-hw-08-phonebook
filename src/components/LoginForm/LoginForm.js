import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

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
        <div>
          <h2>Login</h2>
          <label htmlFor="email">
            Email
            <Field type="email" id="email" name="email" />
            <ErrorMessage component="div" name="email" />
          </label>

          <label htmlFor="password">
            Password
            <Field type="password" id="password" name="password" />
            <ErrorMessage component="div" name="password" />
          </label>

          <button type="submit">Log In</button>
          <div>
            <p>Do not have an account?</p>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};