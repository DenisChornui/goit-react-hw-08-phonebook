import { MainContainer } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContainerFilter } from 'components/Filter/Filter.styled';

export default function Contacts() {
  return (
    <MainContainer>
      <ContactForm />
      <ContainerFilter>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </ContainerFilter>
    </MainContainer>
  );
}
