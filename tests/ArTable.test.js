import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import { ArTable } from '../src/js/components/ArTable';


configure({ adapter: new Adapter() })

describe('Ar Table', () => {
  let props;
  let wrapper;
  let useState;
  let activeIndex;

  beforeEach(() => {
      useState = jest.spyOn(React, "useState")
      props = {
        arItems: [{"id": 1, "description": "Strawberries", "observationDate" : "2018-01-01", "severity": 10},
        {"id": 2, "description": "Strawberries", "observationDate" : "2018-01-01", "severity": 9}]
      };
      wrapper = shallow(<ArTable {...props} activeIndex={activeIndex}/>);
  });

  it('should render a Table component', () => {
      expect(wrapper.find('table')).toBeDefined();
  });

  it('should display grid date on the fly with sorting', () => {
    let el = wrapper.find("table");
    el.find('span').last().simulate("click");
    expect(el).toHaveLength(1);
    activeIndex = 0;  
  });

  it("should sort items", ()=> {    
    let el = wrapper.find("table");
    el.find('.sort-by').last().simulate("click");
  })
 
});