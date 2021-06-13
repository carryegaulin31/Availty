import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'

import userRegsModel from './users'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const NewUsers = usersModel(connection, Sequelize)

export default { NewUsers }
