import React, {Component} from 'react';
import ProductTable from '../ProductTable'
import SearchBar from '../SearchBar';

class SearchProductList extends Component {

    constructor(props){
      super(props);
      this.state={
        filterText: '',
        inStockOnly: false,
      }
    }
    onTextChange=(key)=>{//arrow function automatically binds the this instance
      this.setState({
        filterText:key,
      })

    }
    onTickChange=(inStockOnly)=>{
      console.log(inStockOnly);
      this.setState({
        inStockOnly:inStockOnly,
      })
     
    }
    render(){

      return (
        <div style={{textAlign:'center'}}>
        <div style={{display:'inline-block',marginTop:'50px'}}>
          <SearchBar onTextChange={this.onTextChange} onTickChange={this.onTickChange} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
          <ProductTable inStockOnly={this.state.inStockOnly} searchKey={this.state.filterText} products={this.props.products}/>
        </div>
        </div>

      )
    }
}

export default SearchProductList;