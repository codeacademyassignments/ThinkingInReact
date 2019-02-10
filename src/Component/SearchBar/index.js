import React, {Component} from 'react';

const SearchBar = (props)=> { 
  return (
  <div>
  <input type="text" placeholder="Search..." value = {props.filterText} onChange = {(event)=>props.onTextChange(event.target.value)}/>
  <br></br>
  <input type="checkbox" checked = {props.inStock} onClick={(event)=>{props.onTickChange(event.target.checked)}} />Only show products in stock
  </div>);  
}
export default SearchBar;