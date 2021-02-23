import React from 'react';
import Footer from './';
import {create} from 'react-test-renderer';

test('render footer', () => {
  const tree = create(<Footer />);
  expect(tree.toJSON()).toMatchSnapshot();
});
