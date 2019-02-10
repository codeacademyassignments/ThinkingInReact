import React from 'react';

const ProductRow = (props)=>{
const name = props.inStock ? props.name : <span id='name' style={{color:'red'}}>{props.name}</span>;
return (<tr>
  <td >{name}</td>
  <td> {props.price}</td>
  </tr>);
}

export default ProductRow;