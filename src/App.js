import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TaxTable from "./TaxTable";
import TaxForm from "./TaxForm";

function App() {
  return (
    <div>
      <h1 class="text-center">
        Income Tax Calculator for Individuals 2019-2020
      </h1>
      <TaxTable />
      <TaxForm />
    </div>
  );
}

export default App;
