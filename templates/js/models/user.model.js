const Db = require('../server/boot/db.connection');
const {
    DataTypes
} = require("sequelize");

// import models below

// db schema below
const User = Db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        hasComment: {
            type: DataTypes.STRING,
            comment: "Email will be unique!"
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
}, {
    freezeTableName: true,
    paranoid: true,
    hasComment: true,
    indexes: [{
            unique: true,
            name: 'email',
            fields: ['email']
        },
        {
            unique: true,
            name: 'user_name',
            fields: ['user_name']
        }
    ]
});

// Relations
// User.hasMany(ModelName, {
//     foreignKey: 'user_id'
// });

module.exports = User;