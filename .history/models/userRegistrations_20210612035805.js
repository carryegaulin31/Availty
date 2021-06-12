const userRegistrations = (connection, Sequelize) => {
    return connection.define('userRegistrations', {
        id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        nameFirst: { type: Sequelize.STRING, allowNull: false },
        nameLast: { type: Sequelize.STRING, allowNull: false },
        NPI: { type: Sequelize.INTEGER, allowNull: false },
        TeleNumber: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false },
        
    })
}
