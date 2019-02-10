import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import React from 'react';
//import { isMainThread } from 'worker_threads';
import ProductRow from './index';

describe('ProductRow',()=>{
  
  it('snapshot testing',()=>{ 
    const tree = renderer.create(<ProductRow name='football' price='$45' inStock={true}/>);
    expect(tree).toMatchSnapshot();
  })
  it('should red the text passed',()=>{
    const wrapper = shallow(<ProductRow name='football' price = '$45' inStock = {false}/>);
    expect(wrapper.find('#name').prop('style')).toHaveProperty('color','red');
  })
  it('should red the text passed',()=>{
    const wrapper = shallow(<ProductRow name='football' price = '$45' inStock = {true}/>);
    expect(wrapper.find('#name').length).toEqual(0);
  })
  // it('should set its props to name and price',()=>{
  //   const wrapper = shallow(<ProductRow name='football' price='$45'/>);
  //   console.log('herer');
  //   console.log(wrapper.instance.props);
  //   expect(wrapper.find('.Statue').props().name).toEqual('football');
  //   expect(wrapper.props().price).toEqual('$45');
  // })
})