const { usersData } = require('../../data/users');

function getProfile(req, res) {
  const { id } = req.params;

  return res.status(200).json({ message: "User not found!" });
}

function getAllProfiles(req, res) {

  try {
    
    return res.status(200).json(usersData)
  } catch (error) {
    
    return res.status(400).json(error.message)
  }
}



module.exports = { getProfile, getAllProfiles };