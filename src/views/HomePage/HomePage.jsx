import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// react redux
import { connect } from 'react-redux';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import BusyLoad from "components/BusyLoad/BusyLoad.jsx";
// sections for this page
import SearchSection from "./Sections/SearchSection.jsx";
import BookingListSection from "./Sections/BookingListSection.jsx";
// redux action
import actions from 'actions/bookings';

import homePageStyle from "assets/jss/views/homePageStyle.jsx";

const mapStateToProps = state => ({
  bookings: state.bookings,
});

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      searchCondition: null
    }

    this._syncListBooking = this._syncListBooking.bind(this);
    this.handleSearchStart = this.handleSearchStart.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(actions.get());
  }

  handleSearchStart(event, searchCondition) {
    this.setState({searchCondition});
  }

  _syncListBooking() {
    let data;
    if (this.state.searchCondition) {
      data = (this.props.bookings.data || []).filter(booking => 
        booking.user.name.toLowerCase().includes(this.state.searchCondition.userName.toLowerCase())
      );
    } else {
      data = this.props.bookings.data || [];
    }

    return data;
  }

  render() {
    const { classes, bookings } = this.props;
    
    return <div>
      <BusyLoad 
        open={bookings.loading}
      />
      <Header
        brand="Smove Challenge Demo"
        fixed
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SearchSection dispatch={this.props.dispatch} onSearchStart={this.handleSearchStart}/>
        <BookingListSection listBooking={this._syncListBooking()}/>
      </div>

      <Footer />
    </div>;
  }
}

export default connect(mapStateToProps)(withStyles(homePageStyle)(HomePage));