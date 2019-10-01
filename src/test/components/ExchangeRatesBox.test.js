import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';

import ExchangeRatesBox from '../../components/ExchangeRatesBox/ExchangeRatesBox';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('ExchangeRatesBox', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<ExchangeRatesBox store={store} />).dive();
        expect(wrapper).toMatchSnapshot();
    });
});