const { DataTypes, Model } = require("sequelize");
const db = require("../../config/db");

class Todos extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                },
                titre: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                date_create: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                date_update: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
            },
            { sequelize }
        );
    }
}

module.exports = Todos;
