import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from '../../containers/Home/Home';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('Home', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<Home store={store} />).dive();
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain add currency button', () => {
        const wrapper = mount(<Home store={store} />);
        expect(wrapper.find('.addCurrencyButton').length).toEqual(1)
    });
});