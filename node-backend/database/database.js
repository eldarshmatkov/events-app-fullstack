/*var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run(`CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text UNIQUE,
            password text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,(err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                db.run(insert, ["user","user@example.com",md5("user123456")])
            }
        })
    }
})


module.exports = db*/
var sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE event (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            unit text, 
            eventList text, 
            theme text, 
            content text, 
            fromDate text, 
            fromTime text 
            )`,
            (err) => {
                if (err) {
                    console.log(err, 'table already created');
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO event (name, unit, eventList, theme, content, fromDate, fromTime) VALUES (?,?,?,?,?,?,?)';
                    db.run(insert, ["admin", "main acc", "кюшац", "lunch", "kartoha s kuricej", "2020-03-19", "12:38"]);
                    db.run(insert, ["someone", "muggle", "поглазеть", "watch", "just chillin", "2002-02-19", "11:38"]);
                }
            });
    }
});


module.exports = db;
