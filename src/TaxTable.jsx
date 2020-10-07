import React, { Component } from "react";

class TaxTable extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <th>Taxable Income</th>
          <th>Tax on Income</th>
        </thead>
        <tbody>
          <tr>
            <td>$0 – $18,200</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>$18,201 – $37,000</td>
            <td>19c for each $1 over $18,200</td>
          </tr>
          <tr>
            <td>$37,001 – $90,000</td>
            <td>$3,572 plus 32.5c for each $1 over $37,000</td>
          </tr>
          <tr>
            <td>$90,001 – $180,000</td>
            <td>$20,797 plus 37c for each $1 over $90,000</td>
          </tr>
          <tr>
            <td>$180,001 and over</td>
            <td>$54,097 plus 45c for each $1 over $180,000</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TaxTable;
