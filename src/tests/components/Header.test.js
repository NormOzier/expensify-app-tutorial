import { shallow } from 'enzyme'
import React from 'react';
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'
//shallow renderer only renders given component

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});