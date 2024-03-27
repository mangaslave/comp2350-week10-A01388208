// const { Sequelize } = require('sequelize');
// const databaseConnectionString = include('databaseConnectionSequelize');
// const sequelize = new Sequelize(databaseConnectionString);

const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi = "mysql://freedb_2350_master:fqAmtT8s%3F8*vrnJ@sql.freedb.tech:3306/freedb_comp2350-week2-A01388208";
const dbConfigLocal = "mysql://freedb_2350_master:fqAmtT8s%3F8*vrnJ@sql.freedb.tech:3306/freedb_comp2350-week2-A01388208";
if (is_qoddi) {
    var databaseConnectionString = dbConfigQoddi;
}
else {
    var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;

// const { Sequelize } = require('sequelize');

// const is_qoddi = process.env.IS_QODDI || false;
// const dbConfigQoddi = "mysql://freedb_2350_master:fqAmtT8s%3F8*vrnJ@sql.freedb.tech:3306/freedb_comp2350-week2-A01388208";
// const dbConfigLocal = "mysql://freedb_2350_master:fqAmtT8s%3F8*vrnJ@sql.freedb.tech:3306/freedb_comp2350-week2-A01388208";

// // Use let here to allow reassignment
// // let databaseConnectionString;

// if (is_qoddi) {
//     databaseConnectionString = dbConfigQoddi;
// } else {
//     databaseConnectionString = dbConfigLocal;
// }

// const sequelize = new Sequelize(databaseConnectionString, {
//     dialect: 'mysql',
// });

// module.exports = sequelize; // Export the sequelize instance with the connection
