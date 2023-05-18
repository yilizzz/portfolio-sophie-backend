const sql = require('mssql');

module.exports =  {
    user: 'azureuser',
    password: 'Bluel*2023',
    server: 'mysqlserver-sophie.database.windows.net',
    database: 'sophie_sqlite',
    options: {
      encrypt: true,
      enableArithAbort: true
    }
  };
