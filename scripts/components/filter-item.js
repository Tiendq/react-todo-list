import React from 'react';
import PropTypes from 'prop-types';
import './todo-filter.scss';

const items = [{
  name: 'SHOW_ALL',
  text: 'All items'
}, {
  name: 'SHOW_OPEN',
  text: 'Open only'
}, {
  name: 'SHOW_COMPLETED',
  text: 'Completed only'
}];

function FilterItem({ filter, onChangeFilter }) {
  return (
    <div className="row">
      <div className="col-12 todo-filter">
        {items.map(item => (
          <label key={item.name} className="form-check-inline todo-filter-item">
            <input type="radio" name="todo_filter" className="form-check-input" onChange={() => onChangeFilter(item.name)} value={item.name} checked={filter === item.name} />&nbsp;{item.text}
          </label>
        ))}
      </div>
    </div>
  );
}

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default FilterItem;
