import React from 'react';
import ButtonCard from './Form';
import {create} from 'react-test-renderer';

test('render button', () => {
  const tree = create(<ButtonCard />);
  expect(tree.toJSON()).toMatchSnapshot();
});
