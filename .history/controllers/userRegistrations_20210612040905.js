import models from '../models'

const saveNewUser = async(req, res) => {
    const { nameFirst, nameLast, NPI, teleNumber, email } = req.body

    if (!nameFirst || !nameLast || !NPI || !teleNumber)
}