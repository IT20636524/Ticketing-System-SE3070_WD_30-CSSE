import React from 'react';
import renderer from 'react-test-renderer';
import BarcodeScanner from '../src/screens/BarcodeScanner/index';


jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve()),
}));

describe('<BarcodeScanner />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<BarcodeScanner />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
