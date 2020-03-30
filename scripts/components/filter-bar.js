import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import FilterItem from './filter-item';

const mapStateToProps = (state) => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter(filter) {
    dispatch(changeFilter(filter));
  }
});

const FilterBar = connect(mapStateToProps, mapDispatchToProps)(FilterItem);
export default FilterBar;
