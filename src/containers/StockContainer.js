import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock stockAction={this.props.addStockToPortfolio} stock={stock} />)
        }
      </div>
    );
  }

}

export default StockContainer;
