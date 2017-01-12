import { connect } from 'react-redux';
import { toggleItem, removeItem } from './actions';
import DropboxAccess from './dropbox-access';

const mapDispatchToProps = (dispatch) => ({
  onGrantAccess(code) {
    dispatch(toggleItem(code));
  }
});

const DropboxAccessContainer = connect(null, mapDispatchToProps)(DropboxAccess);
export default DropboxAccessContainer;
