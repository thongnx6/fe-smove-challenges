import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import Search from '@material-ui/icons/Search';
import Close from '@material-ui/icons/Close';

import searchSectionStyle from "assets/jss/views/homePageSections/searchSectionStyle.jsx";

class SearchSection extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: ''
    }
  }

  handleClearSearch = async (event, condition) => {
    await this.setState({
      [condition]: ''
    });

    this.props.onSearchStart(event, this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <TextField
          className={classes.searchItem}
          value={this.state.userName}
          label="User name"
          id="user-name"
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
            endAdornment: this.state.userName ? <InputAdornment position="end" className={classes.enAdornment}>
              <IconButton
                aria-label="Toggle password visibility"
                onClick={event => this.handleClearSearch(event, 'userName')}
              >
                <Close />
              </IconButton>
            </InputAdornment> : null
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
          onChange={event => this.setState({userName: event.target.value})}
        />
        <div className={classes.searchAction}>
          <Button variant="contained" color="primary" className={classes.button}
            onClick={event => this.props.onSearchStart(event, this.state)}
          >
            Search <Search />
          </Button>
        </div>
      </div>
    );
  }
}

SearchSection.propTypes = {
  dispatch: PropTypes.func,
  onSearchStart: PropTypes.func,
};

export default withStyles(searchSectionStyle)(SearchSection);