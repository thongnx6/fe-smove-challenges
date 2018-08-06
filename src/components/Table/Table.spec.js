import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TableHeader from './TableHeader.jsx';
import TablePaginationActionsWrapped from './TablePaginationActionsWrapped.jsx';

it('[TableHeader] renders without crashing using enzyme', () => {
  shallow(<TableHeader 
    columnData={[]}
    numSelected={0}
    onRequestSort={() => {}}
    onSelectAllClick={() => {}}
    order={""}
    orderBy={""}
    rowCount={0}
  />);
});

it('[TablePaginationActionsWrapped] renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TablePaginationActionsWrapped count={0} onChangePage={() => {}} page={0} rowsPerPage={0}/>, div);
});