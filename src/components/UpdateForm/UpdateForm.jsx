import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/operations';

export const UpdateForm = ({ contact, closeForm }) => {
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setPhone(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateUser({ ...contact, name, phone }));
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Phone:{' '}
        <input
          type="phone"
          name="phone"
          onChange={handleChange}
          value={phone}
        />
      </label>
      <button>Save</button>
    </form>
  );
};
