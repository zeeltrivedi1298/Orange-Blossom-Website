const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "OrangeBlossom",
});

app.use(cors());

// select query to get data from plant table, displaying using addplants.js

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM plant";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// select query to get data from order table, displaying using displayorders.js

app.get("/api/get/orders", (req, res) => {
  const sqlSelect = "SELECT * FROM orders";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get/employee", (req, res) => {
  const sqlSelect = "SELECT * FROM employee";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// sql query for add plant table, getting data from addplants.js

app.post("/api/insert", (req, res) => {
  console.log("dsfsdfs", req.body);
  const plantid = req.body.plant_id;
  const plantname = req.body.plantname;
  const plantdescription = req.body.plantdescription;
  const plantcolor = req.body.plantcolor;
  const size = req.body.size;
  const price = req.body.price;

  res.send("hello");
  console.log("sadfsf", plantname);
  console.log("price", plantdescription);

  const sqlInsert =
    "INSERT INTO plant (plant_id, plant_name, plant_description, color, plant_price, plant_size) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [plantid, plantname, plantdescription, plantcolor, size, price],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

// sql query for client table, getting data from signup.js

app.post("/api/insert/userdata", (req, res) => {
  console.log("userdata", req.body);
  const userid = req.body.user_id;
  const userfirstname = req.body.firstname;
  const userlastname = req.body.lastName;
  const useremail = req.body.useremail;
  const userpassword = req.body.password;
  const useraddress = req.body.password;
  const usercity = req.body.city;
  const userstate = req.body.state;
  const userzip = req.body.zip;
  const phone = req.body.phone;

  res.send("ddfd");
  console.log(useremail);
  console.log(userpassword);

  const sqlInsert =
    "INSERT INTO client_table (client_id, client_first_name, client_last_name, client_address, client_phonenumber, client_city, client_state, client_zip, client_password, client_email) VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      userid,
      userfirstname,
      userlastname,
      useraddress,
      phone,
      usercity,
      userstate,
      userzip,
      userpassword,
      useremail,
    ],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

// sql query to add data project table, getting data from addproject.js

app.post("/api/insert/addproject", (req, res) => {
  console.log("project data", req.body);

  const projectid = req.body.project_id;
  const projectnanme = req.body.projectname;
  const projectphase = req.body.projectphase;
  const projecttype = req.body.projecttype;
  const projectdescription = req.body.projectdescription;
  const projectinstallation = req.body.projectinstallation;
  const projectaddress = req.body.projectaddress;
  const phonenumber = req.body.phonenumber;
  const projectstartdate = req.body.projectstartdate;
  const projectpickupdate = req.body.projectpickupdate;
  const projecttotal = req.body.projecttotal;
  const projectdeposit = req.body.projectdeposit;
  const payment_date = req.body.payment_date;
  const balance = req.body.balance;
  const payment_id = req.body.payment_id;

  res.send("ddfd");
  console.log("start date: ", projectstartdate);

  const sqlInsert =
    "INSERT INTO project (project_id, project_name, phase, p_type, p_description, p_installation, p_address, phone, p_start_date, pickup, project_total, deposit) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      projectid,
      projectnanme,
      projectphase,
      projecttype,
      projectdescription,
      projectinstallation,
      projectaddress,
      phonenumber,
      projectstartdate,
      projectpickupdate,
      projecttotal,
      projectdeposit,
    ],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );

  const sqlInsert2 =
    "INSERT INTO project_payment (project_id, p_date, balance, amount_paid, p_payment_id) VALUES (?,?,?,?,?)";
  db.query(sqlInsert2, [
    projectid,
    payment_date,
    balance,
    projecttotal,
    payment_id,
  ]);
});

// sql query to add data into employee table, getting data from addemployee.js

app.post("/api/insert/addemployee", (req, res) => {
  console.log("employeedata", req.body);

  const employeeid = req.body.employee_id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const employee_email = req.body.employee_email;
  const password = req.body.password;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const phone = req.body.phone;

  res.send("ddfd");

  const sqlInsert =
    "INSERT INTO employee (employee_id, emp_firstname, emp_lastname, emp_email, emp_password, emp_phoneno, emp_address, emp_city, emp_state, emp_zipcode) VALUES (?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      employeeid,
      firstname,
      lastname,
      employee_email,
      password,
      phone,
      address,
      city,
      state,
      zip,
    ],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

// verify employee credentials:

app.post("/api/verify/employeedata", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlVerify =
    "SELECT * FROM employee WHERE emp_email = ? AND emp_password = ?";
  db.query(sqlVerify, [email, password], (err, result) => {
    console.log("ABC", err);
    console.log("Result", result);
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send("wrong cred.");
    }
  });
});

app.post("/api/insert/orderdata", (req, res) => {
  console.log("orderdata: ", req.body);

  const order_id = req.body.order_id;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const clientid = req.body.clientid;
  const employeeid = req.body.employeeid;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const country = req.body.country;
  const productname = req.body.productname;
  const quantity = req.body.quantity;
  const totalcost = req.body.totalcost;
  const datalength = req.body.datalength;
  const allproductsname = req.body.allproductsname;
  const orderdate = req.body.orderdate;
  const project_id = req.body.project_id;
  const date_modified = req.body.date_modified;
  const starting_bal = req.body.starting_bal;

  res.send("ddfd");
  const sqlInsert =
    "INSERT INTO orders (order_id, order_date, employee_id, client_id, project_id, date_modified, firstname, lastname, productname, quantity, totalprice, address, city, state, zip, country) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      order_id,
      orderdate,
      employeeid,
      clientid,
      project_id,
      date_modified,
      firstname,
      lastname,
      productname,
      quantity,
      totalcost,
      address,
      city,
      state,
      zip,
      country,
    ],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );

  for (var i = 0; i < datalength; i++) {
    const sqlInsert2 =
      "INSERT INTO order_details (order_id, product_name, quantity, price, totalitemordercost, overallordercost) VALUES (?,?,?,?,?,?)";
    db.query(
      sqlInsert2,
      [
        order_id,
        allproductsname[i].title,
        allproductsname[i].quantity,
        allproductsname[i].price,
        allproductsname[i].quantity * allproductsname[i].price,
        totalcost,
      ],
      (err, result) => {
        console.log(err);
        console.log(result);
      }
    );
  }

  const sqlInsert3 =
    "INSERT INTO client_payment (order_id, client_id, bill_date, starting_bal, total_received, outstanding_bal, interest_charges, ending_bal) VALUES (?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert3,
    [order_id, clientid, orderdate, starting_bal, totalcost, 0, 0, 0],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

app.post("/api/insert/deliveryinfo", (req, res) => {
  const delivery_id = req.body.delivery_id;
  const order_id = req.body.orderid;
  const deliverydate = req.body.deliverydate;
  const deliverytime = req.body.deliverytime;
  const deliverydistance = req.body.deliverydistance;
  const deliveryfee = req.body.deliveryfee;

  const sqlInsert =
    "INSERT INTO delivery (delivery_id, order_id, d_date, d_time, d_distance, delivery_fee_rate) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [
      delivery_id,
      order_id,
      deliverydate,
      deliverytime,
      deliverydistance,
      deliveryfee,
    ],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

app.post("/api/delete/orderdata", (req, res) => {
  const orderid = req.body.orderid;

  const sqlDelete = "DELETE FROM orders WHERE order_id=?";
  db.query(sqlDelete, orderid, (err, result) => {
    console.log(err);
    console.log(result);
  });
});

app.post("/api/update/orderdata", (req, res) => {
  const orderid = req.body.orderid;
  const newfirstname = req.body.newfirstname;
  const newlastname = req.body.newlastname;
  const newquantity = req.body.newquantity;
  const newprice = req.body.newprice;

  const sqlUpdate =
    "UPDATE orders SET firstname=?,lastname=?,quantity=?,totalprice=? WHERE order_id=?";

  db.query(
    sqlUpdate,
    [newfirstname, newlastname, newquantity, newprice, orderid],
    (err, result) => {
      console.log(err);
      console.log(result);
    }
  );
});

// app.post("/api/update/orderdata", (req, res) => {
//   const orderid = req.body.orderid;

//   const sqlUpdate = "DELETE FROM orders WHERE order_id=?";
//   db.query(sqlUpdate, orderid, (err, result) => {
//     console.log(err);
//     console.log(result);
//   });
// });

// app.get('/', (req, res) => {
//     db.connect((err, info) => {
//         if (err) throw err;
//         console.log("connected")
//     })

//     // const sqlInsert = "INSERT INTO table_1 (id, name) VALUES ('1', 'HELLO')";
//     // const sqlInsert = "INSERT INTO plant (plant_id, plant_name, plant_description, color, plant_price, plant_size) VALUES ('136', 'ABC', 'RGD', 'blue', '45', '5')";
//     // db.query(sqlInsert, (err,errinfo) => {
//     //     if (err) throw err;
//     //     res.send("hello ji");
//     //     console.log("inserted");

//     // })

//     res.send("hello")

// })

app.listen(3002, () => {
  console.log("server runnig on 3002");
});
