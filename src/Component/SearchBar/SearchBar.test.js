import './index.js';
import renderer from 'react-test-renderer';
import SearchBar from './index';
import React from 'react';
import {shallow} from 'enzyme';

describe('searchBar',()=>{
  const onTickChangeMock = jest.fn();
  const onTextChangeMock = jest.fn();
  const wrapper = shallow(<SearchBar filterText='nothing' inStock={true} onTickChange = {onTickChangeMock} onTextChange = {onTextChangeMock}/>);
  //console.log(wrapper.props());
  it('snapshot should match',()=>{
    const tree = renderer.create(<SearchBar filterText='nothing' inStock={true} onTickChange = {onTickChangeMock} onTextChange = {onTextChangeMock}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should call onTextChangeMock when text changes',()=>{
 // expect(wrapper.props().filterText).toEqual('nothing');
//expect(wrapper.props.inStock).toEqual(true);
    wrapper.find('[type="text"]').simulate('change',{target:{value:'something'}});
   // expect(onTextChangeMock).toHaveBeenCalled();
    expect(onTextChangeMock).toHaveBeenCalledWith('something');
  })
  it('should call onTickChangeMock when tick checked/unchecked',()=>{
    //expect(wrapper.props().filterText).toEqual('nothing');
//expect(wrapper.props.inStock).toEqual(true);
    wrapper.find('[type="checkbox"]').simulate('click',{target:{checked:true}});
    expect(onTickChangeMock).toHaveBeenCalled();
    expect(onTickChangeMock).toHaveBeenCalledWith(true);
  })
})


