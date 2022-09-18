import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'singerflix_development',
  username: 'singerflix',
  password: 'singerflix',
  define: {
    underscored: true
  }
})