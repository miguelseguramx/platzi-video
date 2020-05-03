import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Footer testing', () => {
  const footer = mount(<Footer />);
  test('Render Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Footer haves three anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });
  test('Footer Snapshoot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

