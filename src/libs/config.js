// const Sequelize  = require("sequelize");


//     // database:'SalfaLink',
//     // username: 'sa',
//     // password:'Micrologica2014',
//     // params:{
//     //     dialect: 'mssql'
//     // }
//     const sequelize = new Sequelize('SalfaLink', 'sa', 'Micrologica2014', {
//         host: '127.0.0.1',
//         dialect: 'mssql',
//         dialectOptions: {
//         options: {
          
//             encrypt: false,
//             validateBulkLoadParameters: true,
//         }
//         }
//         });
//         console.log("holaaaaaaaaaaaaaaaaaaaaaaaa")
//     sequelize
//       .authenticate()
//       .then(() => {
//         console.log('Connection has been established successfully.'); // eslint-disable-line no-console
//       })
//       .catch((err) => {
//         console.error('Unable to connect to the database:', err); // eslint-disable-line no-console
//       });
//       console.log("chao")
// module.exports = sequelize