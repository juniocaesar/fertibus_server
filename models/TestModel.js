import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Test = db.define('test_tbl', {
    title: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

export default Test;