import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'
const userRegistrationsModel = require('./userRegistrations')


const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]
const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const newUsers = userRegistrationsModel(connection, Sequelize)

module.exports = { }