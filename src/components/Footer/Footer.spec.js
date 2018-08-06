import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Footer from './Footer.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer/>, div);
});

it('renders without crashing using enzyme', () => {
  shallow(<Footer />);
});