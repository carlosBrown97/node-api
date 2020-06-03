const { log } = require('../../config.js')
const models = require('../db/models')
const _ = require('lodash')

async function getUsers(req, res) {
  try{
    const users = await models.Users.findAll({
      order: [['createdAt', 'DESC']]
    })

    return res.status(201).json({data: users})
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant show all Users',
      data: []
    })
  }
}

async function getOneUser(req, res) {
  try{
    const data = req.params
    const user = await models.Users.findOne({
      where: {
        id: data.id
      }
    })

    return res.status(201).json({
      data: user
    })
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant show one Users',
      data: []
    })
  }
}

async function createUser(req, res) {
  try{
    const data = req.body
    const newUser = await models.Users.create(data)

    return res.status(201).json({
      message: 'User create successfully',
      data: newUser
    })
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant create User',
    })
  }
}

async function updateUser(req, res) {
  try{
    const userId = req.params.id
    const data = req.body

    const user = await models.Users.findByPk(userId)

    const updateUser = await user.update(data)

    return res.status(201).json({
      data: updateUser
    })
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant update User',
    })
  }
}

async function deleteUser(req, res) {
  try{
    const userId = req.params.id

    const user = await models.Users.findByPk(userId)

    await user.destroy()

    return res.status(201).json({message: 'User deleted succesfully'})
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant delete User',
    })
  }
}

module.exports.createUser = createUser
module.exports.getUsers = getUsers
module.exports.getOneUser = getOneUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser

