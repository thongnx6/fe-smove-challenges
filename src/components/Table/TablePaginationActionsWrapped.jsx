import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
// @material-ui/icons
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: '24px',
    },
  },
  bootstrapInput: {
    textAlign: 'center',
    width: '50px',
    borderRadius: 4,
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    fontSize: 13,
    padding: '6px 4px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
});

class TablePaginationActionsWrapped extends React.Component {

  constructor() {
    super();

    this.state = {
      page: 0
    }
  }

  componentDidMount() {
    this.setState({
      page: this.props.page + 1
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.setState({
        page: this.props.page + 1
      })
    }
  }

  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  handlePageJump = async event => {
    if (event.charCode === 13) {
      const page = this.state.page - 1;
      if (page >= 0 && page < Math.ceil(this.props.count / this.props.rowsPerPage)) {
        this.props.onChangePage(event, page)
      }
    }
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>

        <TextField
          value={this.state.page}
          id="page-jump"
          InputProps={{
            disableUnderline: true,
            type: "number",
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
          onChange={event => this.setState({page: Number(event.target.value) || '' })}
          onKeyPress={event => this.handlePageJump(event)}
        />

        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActionsWrapped.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActionsWrapped,
);