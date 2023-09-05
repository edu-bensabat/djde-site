const DataTypes = require("sequelize")
const sequelize = require("../config/sequelize")

const User = sequelize.define("User", {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
    hash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        }

}
)

module.exports = User;
