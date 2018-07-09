const CONFIG = require("./knexfile")[process.env.NODE_env || "development"]
module.exports = require("knex")(CONFIG);