import React from 'react';
import renderer from 'react-test-renderer';
import { Process } from '../../src/screens';

jest.useFakeTimers();

test('renders correctly', () => {
  const route = {
    params: {
      title: '',
      number: '',
      court: '',
      amount: 12304,
      customers: [{
        name: 'Diego',
        roleName: 'Test'
      }],
      historicals: [],
      id: 1
    }
  }

  const navigation = {
    setOptions: () => {}
  }

  const tree = renderer.create(<Process route={route} navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});