import models from '../models'

export const getProviderByLastName = async (req, res) => {
  const { identifier } = req.params

  const provider = await models.userRegistrations.findAll({
    where: { 
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { nameLast: { [models.Sequelize.Op.like]: }}
  })
}

// eslint-disable-next-line import/prefer-default-export
export const saveNewUser = async (req, res) => {
  try {
    const {
      nameFirst, nameLast, NPI, teleNumber, email,
    } = req.body

    if (!nameFirst || !nameLast || !NPI || !teleNumber || !email) {
      return res.status(400).send(' The following fields are required: first name, last, NPI, teleNumber & email')
    }

    const newUser = await models.userRegistrations.create({
      nameFirst, nameLast, NPI, teleNumber, email,
    })

    return res.status(201).send(newUser)
  } catch (error) {
    return res.status(500).send('Unable to save new user, please try again')
  }
}
