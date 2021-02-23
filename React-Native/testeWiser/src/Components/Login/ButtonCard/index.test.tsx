import React from 'react';
import ButtonCard from './';
import {create} from 'react-test-renderer';

test('render button', () => {

  function test(){
    console.log('tested')
  }
  const tree = create(<ButtonCard submitFunction={test}/>);
  expect(tree.toJSON()).toMatchSnapshot();
});
