import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
// sections for this page
import SearchSection from "./Sections/SearchSection.jsx";
import BookingListSection from "./Sections/BookingListSection.jsx";

import homePageStyle from "assets/jss/views/homePageStyle.jsx";

class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    
    return <div>
      <Header
        brand="Smove Challenge Demo"
        fixed
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SearchSection />
        <BookingListSection />
      </div>

      <Footer />
    </div>;
  }
}

export default withStyles(homePageStyle)(HomePage);