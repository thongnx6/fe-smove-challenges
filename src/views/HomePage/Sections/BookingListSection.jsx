import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// core components
import TableHeader from 'components/Table/TableHeader';
import TablePaginationActionsWrapped from 'components/Table/TablePaginationActionsWrapped';

import bookingListSectionStyle from "assets/jss/views/homePageSections/bookingListSectionStyle.jsx";

// function getSorting(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
//     : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
// }

const columnData = [
  { id: 'user', numeric: false, disablePadding: true, label: 'User' },
  { id: 'car', numeric: false, disablePadding: false, label: 'Car' },
  { id: 'pickup', numeric: false, disablePadding: false, label: 'Pick up' },
  { id: 'dropoff', numeric: false, disablePadding: false, label: 'Drop off' },
  { id: 'bookStart', numeric: false, disablePadding: false, label: 'Book start' },
  { id: 'bookEnd', numeric: false, disablePadding: false, label: 'Book end' },
];

class BookingListSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      order: 'asc',
      orderBy: '',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 10,
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    // do something ex: view detail
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;



  render() {
    const { classes, listBooking } = this.props;
    const { order, orderBy, selected, rowsPerPage, page } = this.state;
    // bad performance for client handle sort 10000 record, just API support, everything will be Better
    // const data = order ? listBooking.sort(getSorting(order, orderBy)) : listBooking;
    const data = listBooking;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.container}>

        <Table className={classes.table} aria-labelledby="tableTitle">
          <TableHeader
            columnData={columnData}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={this.handleSelectAllClick}
            onRequestSort={this.handleRequestSort}
            rowCount={listBooking.length}
          />

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(n => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                  >
                    <TableCell component="th" scope="row" padding="none">
                      {n.user.name}
                    </TableCell>
                    <TableCell>{n.car.licence_plate}</TableCell>
                    <TableCell>{n.pickup.code}</TableCell>
                    <TableCell>{n.dropoff.code}</TableCell>
                    <TableCell>{n.book_start}</TableCell>
                    <TableCell>{n.book_end}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActionsWrapped}
        />

      </Paper>
    );
  }
}

BookingListSection.propTypes = {
  listBooking: PropTypes.array,
};

export default withStyles(bookingListSectionStyle)(BookingListSection);