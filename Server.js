const express = require('express');
const mysql = require('mysql');

const app = express();

// Step 4: Create a connection to MySQL
const db = mysql.createConnection({
    host: 'localhost',       // Your host, likely 'localhost'
    user: 'root',            // Your MySQL user
    password: 'GuRU077@',    // Your MySQL password
    database: 'test',        // The database you created
    port: 3306               // MySQL default port is 3306
});

// Step 5: Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Step 6: Create an API endpoint to fetch data
app.get('/Employee', (req, res) => {
    const sql = 'SELECT * FROM Employee';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error in SQL query:', err.message);
            res.json('Error executing query');
            return;
        }
        res.json(results);  // Send the results as JSON
    });
});

// Step 7: Start the server
app.listen(8081, () => {
    console.log('Server started on port 8081');
});
