const { log } = require('../../config.js')
const models = require('../db/models')
const _ = require('lodash')

async function getRoles(req, res) {
  try{
    const roles = await models.Roles.findAll({
      order: [['createdAt', 'DESC']]
    })

    return res.status(201).json({data: roles})
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant show all Roles',
      data: []
    })
  }
}

async function getOneRole(req, res) {
  try{
    const data = req.params
    const role = await models.Roles.findOne({
      where: {
        id: data.id
      }
    })

    return res.status(201).json({
      data: role
    })
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant show one Roles',
      data: []
    })
  }
}

async function createRole(req, res) {
  try{
    const data = req.body
    const newRole = await models.Roles.create(data)

    return res.status(201).json({
      message: 'Role create successfully',
      data: newRole
    })
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant create Role',
    })
  }
}

async function updateRole(req, res) {
  try{
    const roleId = req.params.id
    const data = req.body

    const role = await models.Roles.findByPk(roleId)

    const updateRole = await role.update({
      name: data.name
    })

    return res.status(201).json({
      message: 'Role finded',
      data: updateRole
    })
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant update Role',
    })
  }
}

async function deleteRole(req, res) {
  try{
    const roleId = req.params.id

    const role = await models.Roles.findByPk(roleId)

    await role.destroy()

    return res.status(201).json({message: 'Role deleted succesfully'})
  }catch(e){
    log.error(e)
    res.status(500).json({
      message: 'Cant delete Role',
    })
  }
}

module.exports.createRole = createRole
module.exports.getRoles = getRoles
module.exports.getOneRole = getOneRole
module.exports.updateRole = updateRole
module.exports.deleteRole = deleteRole

