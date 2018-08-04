import React from 'react';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// @material-ui/icons
import Search from '@material-ui/icons/Search';

import searchSectionStyle from "assets/jss/views/homePageSections/searchSectionStyle.jsx";

function SearchSection(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <TextField
        className={classes.searchItem}
        defaultValue=""
        label="Start Time"
        id="bootstrap-input"
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
      />
      <div className={classes.searchAction}>
        <Button variant="contained" color="primary" className={classes.button}>
          Search <Search />
        </Button>
      </div>
    </div>
  );
}

export default withStyles(searchSectionStyle)(SearchSection);