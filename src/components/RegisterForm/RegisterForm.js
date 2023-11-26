import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <div>
          <h2>Register</h2>

          <label htmlFor="name">
            Username
            <Field type="text" id="name" name="name" />
            <ErrorMessage component="div" name="name" />
          </label>

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

          <button type="submit">Register</button>
          <div>
            <p>Have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
