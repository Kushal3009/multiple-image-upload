const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sample', 'sa', 'Kushal@030', {
    host: 'localhost',
    dialect: 'mssql',
});

// Define the File model
const File = sequelize.define('File', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uploadedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
});

// Sync the model with the database
// sequelize.sync()
//     .then(() => console.log('File table created successfully'))
//     .catch(err => console.error('Error creating table:', err));

module.exports = File;
