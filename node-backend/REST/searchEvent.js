var express = require('express');
var app = express();
var db = require('../database/database');

/* GET events listing. */
app.get('/search', function (req, res, next) {
    var sql = "SELECT * FROM event WHERE theme LIKE ?";
    var formattedParam = '%' + req.query.search + '%';
    var params = [formattedParam];
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
});

module.exports = app;
