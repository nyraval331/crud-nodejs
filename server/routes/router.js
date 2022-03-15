const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add-user', services.add_user)

route.get('/update-user', services.update_user)


// API user
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


route.post('/api/emp', controller.createEmp);
route.get('/api/emp', controller.empFind);

module.exports = route