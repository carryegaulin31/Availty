import models from '../models'

const saveNewUser = async(req, res) => {
    const { nameFirst, nameLast, NPI, teleNumber, email } = req.body

    if (!nameFirst || !nameLast || !NPI || !teleNumber || !email) {
        return res.status(400).send(' The following fields are required First, nameLast, NPI, teleNumber, email')
    }
}