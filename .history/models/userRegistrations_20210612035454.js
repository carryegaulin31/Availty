const userRegistrations = (connection, Sequelize) => {
    return connection.define('userRegistrations', {
        id: { type: Sequelize.INTEGER, auto_increment: true, primaryKey: true },
        nameFirst: { type: Sequelize.STRING, allowNull: false },
        nameLast 
    })
}
