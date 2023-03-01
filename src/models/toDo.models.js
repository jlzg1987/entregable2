const {  DataTypes } = require('sequelize');
const db = require('../utils/database');


const toDo = db.define('todo', {
    // Model attributes are defined here
    id:{    
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});
module.exports = toDo;
