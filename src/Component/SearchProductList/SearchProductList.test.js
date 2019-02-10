import './index.js';
import renderer from 'react-test-renderer';
import SearchProductList from './index';
import React from 'react';
import {shallow} from 'enzyme';


const products = [
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"} 
];
describe('snapshot testing',()=>{

  const tree = renderer.create(<SearchProductList products={products}/>);
  expect(tree).toMatchSnapshot();
})

describe('onTextChange',()=>{
  const wrapper = shallow(<SearchProductList products={products}/>);
  it('should change the filterText property of state to the string passed',()=>{
    wrapper.instance().onTextChange('foot');
    expect(wrapper.instance().state.filterText).toEqual('foot');
  })
  it('should change the filterText property of state to the integer passed',()=>{
    wrapper.instance().onTextChange(123);
    expect(wrapper.instance().state.filterText).toEqual(123);
  })
  it('should change the filterText property of state to the empty string when empty string passed',()=>{
    wrapper.instance().onTextChange('');
    expect(wrapper.instance().state.filterText).toEqual('');
  })
})

describe('onTickChange',()=>{
  const wrapper = shallow(<SearchProductList products={products}/>);
  it('should change the Tick property to the value passed',()=>{
    wrapper.instance().onTickChange(true);
    expect(wrapper.instance().state.inStockOnly).toEqual(true);
  })
})