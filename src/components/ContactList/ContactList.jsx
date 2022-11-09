import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  selectedContacts,
  selectVisibleContacts,
} from 'redux/contact-selectors';
import { deleteUser } from 'redux/operations';
import { List, Button } from './ContactList.styled';
import Avatar from 'react-avatar';

import { UpdateForm } from 'components/UpdateForm/UpdateForm';

export const ContactList = () => {
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const visualContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(selectedContacts);

  const onDeleteBtnClick = contactId => {
    dispatch(deleteUser(contactId));
  };

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeUpdateForm = () => {
    setContactToUpdate(null);
  };

  return (
    <ul>
      {visualContacts.map(({ id, name, phone }) => (
        <List key={id}>
          <span>
            <Avatar round={true} size={25} name={name} />
          </span>
          <span>
            {name}: {phone}
          </span>
          <Button
            type="button"
            onClick={() => {
              onDeleteBtnClick(id);
            }}
          >
            Delete
          </Button>
          <Button
            type="button"
            onClick={() => {
              showUpdateForm(id);
            }}
          >
            Update
          </Button>
          {contactToUpdate && contactToUpdate.id === id && (
            <UpdateForm contact={contactToUpdate} closeForm={closeUpdateForm} />
          )}
        </List>
      ))}
    </ul>
  );
};
