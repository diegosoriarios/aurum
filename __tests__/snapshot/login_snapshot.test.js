import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from '../../src/screens';

test('renders correctly', () => {
  const navigation = {}
  const tree = renderer.create(<Login navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});