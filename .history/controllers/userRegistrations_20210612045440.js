import models from '../models'

export  saveNewUser = async (req, res) => {
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
}

