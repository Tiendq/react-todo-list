import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/dropbox-access.scss';
import dropboxLogo from '../../assets/images/dropbox-logo.svg';
import dropboxText from '../../assets/images/dropbox-text.svg';

class DropboxAccess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ''
    };

    this.codeChangeHandler = this.codeChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  codeChangeHandler(event) {
    this.setState({
      code: event.target.value
    });
  }
  submitHandler(event) {
    event.preventDefault();

    if (this.state.code) {
      this.props.onGrantAccess(this.state.code);

      this.setState({
        code: ''
      });
    }
  }
  render() {
    return (
      <div className="dropbox-access">
        <div className="row">
          <div className="col-xs-12 dropbox-logo">
            <img src={dropboxLogo} className="dropbox-logo__glyph" />
            <img src={dropboxText} className="dropbox-logo__type" />
          </div>
        </div>
        <form className="form-inline row" onSubmit={this.submitHandler}>
          <div className="col-xs-12">
            <input type="text" className="form-control todo-text" onChange={this.codeChangeHandler} value={this.state.code} placeholder="Access code" />
            <button type="submit" className="btn btn-primary add-todo" disabled={'' === this.state.code}>Access</button>
          </div>
        </form>
      </div>
    );
  }
}

DropboxAccess.propTypes = {
  onGrantAccess: PropTypes.func.isRequired
};

export default DropboxAccess;
