import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BusyLoad from './BusyLoad.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusyLoad open={true}/>, div);
});

it('renders without crashing using enzyme', () => {
  shallow(<BusyLoad open={true} />);
});