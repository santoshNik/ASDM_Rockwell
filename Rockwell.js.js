var express = require('express');
var app = express();


//Reusable controllers
var EmployeeController=function (req, res) {
  console.log("CAlling rest api");
  var Employees =
[
{emp_id:1,emp_name:'santosh',company_name:'Rockwell',center:'London',service_by:'AWS'},
{emp_id:2,emp_name:'ganesh',company_name:'Rockwell',center:'hong kong',service_by:'AWS'},
{emp_id:3,emp_name:'vikas',company_name:'Rockwell',center:'beijing',service_by:'AWS'},
{emp_id:4,emp_name:'mahesh',company_name:'Rockwell',center:'sydney',service_by:'AWS'},
{emp_id:5,emp_name:'sid',company_name:'Rockwell',center:'capetown',service_by:'AWS'}
];
  res.send(Employees);
};

// setting router to map requests  with controllers

app.get('/Employees',EmployeeController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})