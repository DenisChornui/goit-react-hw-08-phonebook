import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ContainerForm, Input, Label, StyledBtn } from './ContactForm.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  number: Yup.string()
    .matches(/^[0-9-+]+$/, 'Please enter digits, "-" or "+"')
    .required('This field is required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          return alert(`${values.name} is already in contacts`);
        }
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form>
        <ContainerForm>
          <h1>Phonebook</h1>
          <Label>
            Name
            <Input name="name" />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input type="tel" name="number" required />
            <ErrorMessage name="number" component="div" />
          </Label>

          <StyledBtn type="submit">Add contact</StyledBtn>
        </ContainerForm>
      </Form>
    </Formik>
  );
};
