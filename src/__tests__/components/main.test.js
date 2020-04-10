import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Main from '../../components/main.js';


describe('<Main/>', () => {
  it('exists at the start of app', () => {
    let app = shallow(<Main />);
    expect(app.find('section').exists()).toBeTruthy();
  });

  it('The state start 0', ()=> {
    let app = mount(<Main />);
    expect(app.state('number')).toEqual(0);
  });

  it('changes the state on click - ', ()=> {
    let app = mount(<Main />);
    let buttonDown = app.find('.plusClicker');
    buttonDown.simulate('click');
    expect(app.state('number')).toEqual(1);
  });
  it('changes the state on click +', ()=> {
    let app = mount(<Main />);
    let buttonUp = app.find('.minusCliker');
    buttonUp.simulate('click');
    expect(app.state('number')).toEqual(-1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});