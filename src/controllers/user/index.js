const { usersData } = require('../../data/users')

function getProfile(req, res) {
  const { id } = req.params

  try {
    
    if (!usersData[id]) {

      return res.status(400).json({ message: "Usuario não encontrado!" })
    }

    return res.status(200).json(usersData[id])

  } catch (error) {

    return res.status(400).json(error.message)    
  }
}

module.exports = { getProfile }