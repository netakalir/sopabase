import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("sequelize_test", "root", '', {
    logging : false,
    host: "localhost",
    dialect: "mysql",
});

