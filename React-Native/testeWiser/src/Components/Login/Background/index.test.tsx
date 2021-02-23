import React from 'react';
import Background from './';
import {create} from 'react-test-renderer';

test('render Background', () => {
  const tree = create(<Background />);
  expect(tree.toJSON()).toMatchSnapshot();
});
