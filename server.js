'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var conf = require('./privat/config');
var pool = mysql.createPool(conf);
var customers = require('./privat/Models/Customers')(pool);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers',
  'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/users', function (req, res) {
    customers.get(function (err, data) {
      if (!err)
        res.send(JSON.stringify(data));
    });
});

app.delete('/users/:id', function (req, res) {
  res.send('DELETE request to homepage');
});

app.put('/users/:id', function (req, res) {
   var obj = req.body;
   
   customers.save(obj, function (err, val) {
      if(!err)
        res.send(val);
      else
        res.send(err);
   });
});

app.listen(8081, function () {
  console.log('Server successfully started on 8081 port');
});
