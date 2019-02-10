import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './Component/SearchBar'
import ProductCategoryRow from './Component/ProductCategoryRow'
import ProductRow from './Component/ProductRow'
import ProductTable from './Component/ProductTable';
import SearchProductList from './Component/SearchProductList';
import * as serviceWorker from './serviceWorker';

const products2 = [
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"} 
];

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<SearchBar />,document.getElementById('root'));
// ReactDOM.render(<ProductCategoryRow category="sporting group" />,document.getElementById('root'));
//ReactDOM.render(<ProductTable products = {products2} searchKey='' inStockOnly={false}/>,document.getElementById('root'));
 //ReactDOM.render(<ProductRow name='football' price='$1234' inStock={false} />,document.getElementById('root'));
ReactDOM.render(<SearchProductList products={products2}/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
