import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { filterContactAction } from '../../redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const serchName = useSelector(state => state.filter);

  const handleChangeInput = e => {
    dispatch(filterContactAction(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        required
        value={serchName}
        onChange={handleChangeInput}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
