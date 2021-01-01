const DataTypes = require('sequelize');
const sequelize = require("../libs/config")
module.exports = (sequelize, Datatypes)=>{
    const Tasks= sequelize.define('Tasks',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true

        },
        title:{type:DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty : true
            }          
        },
        done:{
            type: DataTypes.BOOLEAN,
            allowNull :false,
            defaultValue:false,
        }

    });
    // Tasks.associate = (models) =>{
    //     Tasks.belongsTo(models.Users);

    // };

    (async () => {
        await sequelize.sync();
        // Code here
      })();
    return Tasks;
}