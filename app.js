require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const engine = require('ejs-mate');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// // MySQL Connection Pool
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     authPlugins: { caching_sha2_password: mysql.authPlugins.caching_sha2_password },
//     ssl: {
//       rejectUnauthorized: false, // Use true if you have a verified SSL certificate
//     },
//   });
  

// // Test MySQL Connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
//   connection.release();
// });

// Routes
app.get('/', (req, res) => {
    res.render('listings/home');
});


app.get("/about", (req, res)=>{
    res.render('listings/about');
});


// underconstruction
app.use((req, res) => {
    res.status(404).render('listings/404');
  });



// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
