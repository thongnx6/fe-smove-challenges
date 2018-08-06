import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';

class BusyLoad extends React.Component {
  handleClose = () => {
    // do something if necessary
  };

  render() {
    const { onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="busy loader" {...other}>
        <DialogTitle id="simple-dialog-title">
          <CircularProgress />
        </DialogTitle>
      </Dialog>
    );
  }
}

BusyLoad.propTypes = {
  onClose: PropTypes.func,
};

export default BusyLoad;