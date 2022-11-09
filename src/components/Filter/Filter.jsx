import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { changeFilter } from 'redux/contacts-slice';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleInput = event => {
    const { value } = event.target;
    dispatch(changeFilter(value.toLowerCase()));
  };
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="text" onChange={handleInput} />
    </>
  );
};
