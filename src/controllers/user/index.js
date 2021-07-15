const { usersData } = require('../../data/users')

function getProfile(req, res) {
  
  const { id } = req.params

  const usuario = usersData[id]

  return res.status(200).json(usuario)
}

module.exports = { getProfile }