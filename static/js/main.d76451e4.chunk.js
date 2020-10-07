(this["webpackJsonptax-calculator"]=this["webpackJsonptax-calculator"]||[]).push([[0],{12:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),u=(t(12),t(1)),o=t(2),m=t(4),s=t(3),i=(t(13),t(14),function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-bordered table-hover mx-auto"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,"Taxable Income"),l.a.createElement("th",null,"Tax on Income"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"$0 \u2013 $18,200"),l.a.createElement("td",null,"$0")),l.a.createElement("tr",null,l.a.createElement("td",null,"$18,201 \u2013 $37,000"),l.a.createElement("td",null,"19c for each $1 over $18,200")),l.a.createElement("tr",null,l.a.createElement("td",null,"$37,001 \u2013 $90,000"),l.a.createElement("td",null,"$3,572 plus 32.5c for each $1 over $37,000")),l.a.createElement("tr",null,l.a.createElement("td",null,"$90,001 \u2013 $180,000"),l.a.createElement("td",null,"$20,797 plus 37c for each $1 over $90,000")),l.a.createElement("tr",null,l.a.createElement("td",null,"$180,001 and over"),l.a.createElement("td",null,"$54,097 plus 45c for each $1 over $180,000")))))}}]),t}(n.Component)),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).handleChangeInput=function(a){var t=a.target,n=t.name,l=t.value;"salary"===n&&e.props.onChangeSalary(l)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.salary,t=e.tax;return l.a.createElement("div",{className:"shadow p-3 bg-white w-50 mx-auto"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"salary"},"Enter your pre-tax salary: \xa0"),l.a.createElement("input",{id:"salary",name:"salary",type:"number",className:"form-control w-50",onChange:this.handleChangeInput,value:a})),l.a.createElement("div",null,l.a.createElement("span",null,"Tax Amount:\xa0"),l.a.createElement("span",null,"$",t.toFixed(2))),l.a.createElement("div",{className:"d-flex"},l.a.createElement("span",null,"Percentage of Income:\xa0"),l.a.createElement("span",null,(100*(0!==t?t/a:0)).toFixed(2),"%")))}}]),t}(n.Component),h=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={salary:0,tax:0},e.handleChangeSalary=function(a){var t=e.calTax(a);e.setState({salary:a,tax:t})},e.calTax=function(e){var a=0,t=0;return e>=1800001?(a=54097,t=.45*(e-18e4)):e>=90001?(a=20797,t=.37*(e-9e4)):e>=37001?(a=3572,t=.325*(e-37e3)):e>=18201&&(t=.19*(e-18200)),a+t},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Tax Calculator"}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center"},"Income Tax Calculator for Individuals 2019-2020"),l.a.createElement(i,null),l.a.createElement(d,{salary:this.state.salary,tax:this.state.tax,onChangeSalary:this.handleChangeSalary}))}}]),t}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.d76451e4.chunk.js.map