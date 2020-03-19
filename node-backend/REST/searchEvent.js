var express = require('express');
var app = express();
var db = require('../database/database');

/* GET events listing. */
app.get('/search', function (req, res, next) {
    // res.send('respond with a resource');
    var sql = "select * from event";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
    console.log('search!!');
});

module.exports = app;
