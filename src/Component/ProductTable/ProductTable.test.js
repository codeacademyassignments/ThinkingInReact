import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ProductTable from '.';
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';

const sortedProducts = [
    
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"} 
];
const unsortedProducts = [
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"} 
];
describe('snapshot testing',()=>{
  it('snapshot should match to previous snapshot',()=>{
    const tree = renderer.create(<ProductTable searchKey = 'iPod' products={sortedProducts} inStockOnly={false}/> );
    expect(tree).toMatchSnapshot();
  });

})

describe('sortProductOnCategory',()=>{
  const wrapper = shallow(<ProductTable searchKey = '5' products={unsortedProducts} inStockOnly={false}/> );
  it('should sort the product array passed',()=>{
    //expect({abc:'jksjk'}).toEqual({abc:'jksjk'});
    expect(wrapper.instance().sortProductsOnCategory(unsortedProducts)).not.toEqual(unsortedProducts);
    expect(wrapper.instance().sortProductsOnCategory(unsortedProducts)).toEqual(sortedProducts);
  });

})

describe('generateProductTableRow',()=>{
  it('should generate appropriate jsx',()=>{
  const productTableRows = [
  <ProductCategoryRow category="Sporting Goods" key={'4Sporting Goods'}/>,
  <ProductRow inStock={true} name="Football" price="$49.99" key={'4Football'}/>];
  const wrapper = shallow(<ProductTable searchKey = 'Foot' products={unsortedProducts} inStockOnly={false}/>);
  expect(wrapper.instance().generateProductTableRows(sortedProducts,'Foot')).toEqual(productTableRows);
  });
  it('should generate appropriate jsx: empty object when keyword doesnot match with any product name',()=>{
    const wrapper = shallow(<ProductTable searchKey = '$' products={unsortedProducts} inStockOnly={false}/>);
    expect(wrapper.instance().generateProductTableRows(sortedProducts,'$')).toEqual([]);
    });
    it('should generate appropriate jsx: empty object when instockonly true and out of stock product only matches',()=>{
      const wrapper = shallow(<ProductTable searchKey = 'iPhone' products={unsortedProducts} inStockOnly={true}/>);
      expect(wrapper.instance().generateProductTableRows(sortedProducts,'iPhone')).toEqual([]);
      });
})