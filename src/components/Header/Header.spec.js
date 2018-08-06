import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header/>, div);
});

it('renders without crashing using enzyme', () => {
  shallow(<Header />);
});