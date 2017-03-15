import * as React from 'react';
import * as assert from 'assert';
import { shallow } from 'enzyme';
import SearchBar from '../src/components/search_bar';

describe('Search Bar', () => {
  let Component;
  beforeAll(() => {
    Component = shallow(<SearchBar />)
  });

  it('should render an input field', () => {
    expect(Component.html()).toContain('<input type=\"text\" placeholder=\"Enter a Github User&#x27;s name\" value=\"\"/>');
  });
});

