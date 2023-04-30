const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"boland8839",
    host:"localhost",
    port:5001,
    database:"booking"

})


module.exports = pool;