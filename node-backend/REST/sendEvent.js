var express = require('express');
var app = express();
var db = require('../database/database');

/* GET events listing. */
app.post('/send', function (req, res, next) {
    var errors=[];
    if (!req.body.name){
        errors.push("No name specified");
    }
    if (!req.body.unit){
        errors.push("No unit specified");
    }
    if (!req.body.eventList){
        errors.push("No eventList specified");
    }
    if (!req.body.theme){
        errors.push("No theme specified");
    }
    if (!req.body.content){
        errors.push("No content specified");
    }

    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        unit: req.body.unit,
        eventList: req.body.eventList,
        theme: req.body.theme,
        content: req.body.content,
        fromDate: req.body.fromDateMenu,
        fromTime: req.body.fromTimeMenu,
    };
    var sql ='INSERT INTO event (name, unit, eventList, theme, content, fromDate, fromTime) VALUES (?,?,?,?,?,?,?)';
    var params =[data.name, data.unit, data.eventList, data.theme, data.content, data.fromDate, data.fromTime];
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

module.exports = app;
