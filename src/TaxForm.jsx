import React, { Component } from "react";

class TaxForm extends Component {
  /* Extract the salary value from the <input>
   * and update the state variable in App.jsx
   */
  handleChangeInput = (event) => {
    const { name, value } = event.target;
    // Case 1: User provided salary input
    if (name === "salary") {
      this.props.onChangeSalary(value);
    }
  };

  render() {
    const { salary, tax } = this.props;
    let afterTaxSalary = salary - tax;
    let percentage = () => {
      // calculate proportion (tax/salary)
      const taxPortion = tax !== 0 ? tax / salary : 0;
      // return percentage
      return taxPortion * 100;
    };

    return (
      <div className="shadow p-3 bg-white w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="salary">Enter your pre-tax salary: &nbsp;</label>
          <input
            id="salary"
            name="salary"
            type="number"
            className="form-control w-50"
            onChange={this.handleChangeInput}
            value={salary}
          />
        </div>
        <div>
          <span>Tax Amount:&nbsp;</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="d-flex">
          <span>Percentage of Income:&nbsp;</span>
          <span>{percentage().toFixed(2)}%</span>
        </div>
      </div>
    );
  }
}

export default TaxForm;
