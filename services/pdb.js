const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fsjs_qap_3',
  password: 'Keyin2021',
  port: 5432,
});


module.exports = pool;