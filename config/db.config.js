const sql = require('mssql');

module.exports = {
  dialect: 'mssql',
  dialectModule: sql,
  database: 'sophie_sqlite (mysqlserver-sophie/sophie_sqlite)',
  username: 'azureuser',
  password: 'Bluel*2023',
  host: 'mysqlserver-sophie.database.windows.net',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};
// module.exports = {
// 	dialect: "sqlite",
// 	storage: './database.sqlite'
// };
