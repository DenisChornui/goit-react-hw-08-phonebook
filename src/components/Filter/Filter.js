import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="string" name="filter" onChange={contactFilter}></Input>
      </Label>
    </div>
  );
};
