// const express = require("express");
// const app = express();
// const mysql = require("mysql");
// // const cors = require("cors");

// // app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "caawiye",
//   db.connect((err)=> {
//     if (err) throw err;
//     console.log("Connected!");
//   });
// });

const express = require('express')
const mysql = require('mysql')
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'caawiye'
});

db.connect((err)=>{
  if(err){
    throw err
  }else{
    console.log("mysqli connected")
    var sql = "DELETE FROM clients WHERE amount = '30000'";
    db.query(sql,(err, result) => {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  }
});
  const app = express();

  app.listen('3000',()=>{
    console.log(' server started o  n port 3000')
  })

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const phone= req.body.phone;
//   const amount = req.body.amount;
//   const tixraac_no = req.body.tixraac_no;
//   const cash_type = req.body.cash_type;

//   db.query(
//     "INSERT INTO clients (name, tixraac_no, phone,amount,cash_type) VALUES (?,?,?,?,?)",
//     [name, tixraac_no, phone,amount,cash_type],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });


// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log("Yey, your server is running on port 3001");
// });