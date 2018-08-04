import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";

import headerStyle from "assets/jss/components/headerStyle.jsx";

class Header extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} color={this.props.primary}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.brand}
            </Typography>
            <Button color="inherit" href="https://github.com/thongnx6/fe-smove-challenges" target="_blank">
              View on Github
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.defaultProp = {
  color: "primary"
};

Header.propTypes = {
  brand: PropTypes.string,
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "default"
  ]),
};

export default withStyles(headerStyle)(Header);
