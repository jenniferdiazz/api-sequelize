const Sequelize = require('sequelize');
const DataTypes = require('sequelize');



    
const fs = require('fs');
const path = require('path');
var db=null;
var m;
module.exports = app =>{
  const sequelize = new Sequelize('database', 'sa', 'password', {
    host: '127.0.0.1',
    dialect: 'mssql',
    dialectOptions: {
    options: {
      
        encrypt: false,
        validateBulkLoadParameters: true,
    }
    }
    });
  
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); // eslint-disable-line no-console
  });
  //const config =  app.libs.config
  //const sequelize = require("../libs/config")
  if(!db){
    //const sequelize = require("../libs/config")
    // const sequelize = new Sequelize(
    //   config.database,
    //   config.username,
    //   config.password,
    //   config.params
    // );
    db={
      sequelize,
      Sequelize,
      models:{}
    };
    //lee la carpeta models y lo trae en arreglo
    const dir= path.join(__dirname,'models');
    fs.readdirSync(dir).forEach(filename=>{
      //direccion de todos los archivos models:
      //const modelDir = path.join(dir, filename);
      const model = require(path.join(dir, filename))(sequelize, DataTypes)
      
      //los ejecuta sequelize
      //guardar nueva propiedad en el objeto model.name es lo que devuelve sequalize del modelo de datos
     
      db.models[model.name] = model;
     

    });
    //para ejecutar los modelos, se necesitan solo las claves
    //recorre cada archivo y busca su metodoa asociate para hacer las relaciones
    // Object.keys(db.models).forEach(key =>{
    //   db.models[key].associate(db.models);
    // });
    
  }
  console.log("desde db")
  console.log(db.models)

  
  return db;
}





//app.db.sequelize.sync(()=>{
// const Sequelize = require('sequelize');
// const DataTypes = require('sequelize');
// const sequelize = new Sequelize('SalfaLink', 'sa', 'Micrologica2014', {
//   host: '127.0.0.1',
//   dialect: 'mssql',
//   dialectOptions: {
//     options: {
      
//         encrypt: false,
//         validateBulkLoadParameters: true,
//     }
// }

// });


// exports.DataTypes = DataTypes;
// exports.sequelize= sequelize
