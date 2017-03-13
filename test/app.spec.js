import * as React from 'react';
import * as assert from 'assert';
import { shallow } from 'enzyme';
import App from '../src/app';

describe('<App />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render the main component', () => {
        assert.equal(wrapper.find(App).length, 1);
    });

    it('should render an input field', () => {
        assert.equal(wrapper.find('input[type="text"]').length, 1);
    });

    it('should set the value of the input field via state', () => {
        wrapper.setState({ value: 'Hello there' });
        assert.equal(wrapper.find('input').value, "Hello there");
    });
});
