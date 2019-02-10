import React, {Component} from 'react';
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';


class ProductTable extends Component{
  sortProductsOnCategory = (products)=>{
    return products.slice().sort(function(a,b){
      return a.category.toString().localeCompare(b.category.toString());
    })
  }

  generateProductTableRows = (productArray,searchKey)=>
  {
    const rows = [];
    let curr = null;
    productArray.forEach((product,index)=>{
      if(product.name.indexOf(searchKey)===-1)return;
      if(!product.stocked && this.props.inStockOnly)return;
      if(curr!==product.category)
      {
        rows.push(<ProductCategoryRow key = {index+product.category} category={product.category}/>);
        curr = product.category;
      }
      rows.push(<ProductRow key = {index+product.name} name = {product.name}  price={product.price} inStock={product.stocked}/>)
    })
    return rows;
  }
  render(){
    const products = this.props.products;
    const key = this.props.searchKey;
    const sortedProductArray = this.sortProductsOnCategory(products);

    const tableRows = this.generateProductTableRows(sortedProductArray,key);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {tableRows}
        </tbody>

      </table>)
  }
}

export default ProductTable;