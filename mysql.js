 var mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise
 mysql.createConnection({
         host: 'app.checkcarfleet.com',
         user: 'api',
         password: 'api29!',
         database: 'suitecrm',
         port: 6013
     })
     .then((conn) => conn.query('select * from accounts'))
     .then(([rows, fields]) => console.log(rows.length));