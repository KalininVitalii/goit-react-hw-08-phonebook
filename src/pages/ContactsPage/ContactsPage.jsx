// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/AddForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { fetchContacts } from 'redux/operations';

const ContactsPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Section>
        <ContactForm />
        <div>
          <Filter />
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default ContactsPage;
