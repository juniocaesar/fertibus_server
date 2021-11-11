import { Sequelize } from "sequelize";

const db = new Sequelize('u1097867_db_fertibus', 'u1097867_admin', 'unon15699jcdx', {
    host: "srv103.niagahoster.com",
    dialect: "mysql",
});

export default db;