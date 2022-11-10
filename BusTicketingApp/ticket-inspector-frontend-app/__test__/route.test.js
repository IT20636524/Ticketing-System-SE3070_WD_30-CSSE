import React from 'react';
import renderer from 'react-test-renderer';
import Route from '../src/screens/Route/index';


jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve()),
}));

describe('<Route />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Route />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});
