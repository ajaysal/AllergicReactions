import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import { ArForm } from '../src/js/components/ArForm';
//import { App } from '../src/js';

configure({ adapter: new Adapter() })

describe('Ar From', () => {
  let props;
  let wrapper;
  let useState;

  beforeEach(() => {
      useState = jest.spyOn(React, "useState")
      props = {
        addArItem: jest.fn()
      };
      wrapper = shallow(<ArForm {...props} />);
  });

  it('should render a form component', () => {
      expect(wrapper.find('form')).toBeDefined();
  });

  it('should update form field values on change', () => {
      wrapper.find("input[type='text']").simulate("change", { target: { value: 'apple' }})
      wrapper.find("input[type='date']").simulate("change", { target: { value: '2020-10-10' }})
      wrapper.find("select").simulate("change", { target: { value: 2 }})
  });

  it('should update form fields', () => {
    let el = wrapper.find("button");
    let mockedEvent = { preventDefault: jest.fn() }
    el.simulate("click", mockedEvent);
    expect(props.addArItem).toHaveBeenCalled();
  });
});