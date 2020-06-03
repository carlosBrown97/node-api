const router = require('express').Router()
const { log } = require('../../config.js')
const models = require('../db/models')
const _ = require('lodash')
const RoleController = require('../controllers/role.controller')

router.get('/', RoleController.getRoles)

router.get('/:id', RoleController.getOneRole)

router.post('/', RoleController.createRole)

router.put('/:id', RoleController.updateRole)

router.delete('/:id', RoleController.deleteRole)

module.exports = router

