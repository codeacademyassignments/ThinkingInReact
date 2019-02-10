import React from 'react';
import renderer from 'react-test-renderer';
import ProductCategoryRow from './index';

describe('Category Row',()=>{
  it('previous snapshot should match',()=>{
    const tree = renderer.create(<ProductCategoryRow category='sporting group'/>);
    expect(tree).toMatchSnapshot();

  })
})