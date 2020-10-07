import React, { Component } from "react";

class TaxForm extends Component {
  state = {};

  render() {
    return (
      <div className="shadow p-3 bg-white">
        <span className="mr-auto">
          <label for="salary">Enter your salary: &nbsp;</label>
          <input id="salary" name="salary" type="number" />
        </span>
      </div>
    );
  }
}

export default TaxForm;
