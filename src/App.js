import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TaxTable from "./TaxTable";
import TaxForm from "./TaxForm";

class App extends Component {
  state = { salary: 0, tax: 0 };

  // change document title
  componentDidMount() {
    document.title = "Tax Calculator";
  }

  // Update State: Salary and Tax
  handleChangeSalary = (salary) => {
    // Calculate new tax amount
    const taxAmt = this.calTax(salary);
    // Update salary and tax state
    this.setState({ salary: salary, tax: taxAmt });
  };

  // Calculate Tax Amount
  calTax = (salary) => {
    let taxAmount = 0;
    let baseAmt = 0;
    let variableAmt = 0;
    // Case 1: $180,001 and over
    if (salary >= 1800001) {
      baseAmt = 54097;
      variableAmt = (salary - 180000) * 0.45;
    }
    // Case 2: $90,001 – $180,000
    else if (salary >= 90001) {
      baseAmt = 20797;
      variableAmt = (salary - 90000) * 0.37;
    }
    // Case 3: $37,001 – $90,000
    else if (salary >= 37001) {
      baseAmt = 3572;
      variableAmt = (salary - 37000) * 0.325;
    }
    // Case 4: $18,201 – $37,000
    else if (salary >= 18201) {
      variableAmt = (salary - 18200) * 0.19;
    }
    // Case 5: $0 – $18,200 (zero tax)

    // Calculate tax
    taxAmount = baseAmt + variableAmt;
    return taxAmount;
  };

  render() {
    return (
      <div>
        <h1 className="text-center">
          Income Tax Calculator for Individuals 2019-2020
        </h1>
        <TaxTable />
        <TaxForm
          salary={this.state.salary}
          tax={this.state.tax}
          onChangeSalary={this.handleChangeSalary}
        />
      </div>
    );
  }
}

export default App;
