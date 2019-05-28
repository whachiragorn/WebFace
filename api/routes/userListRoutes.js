'use strict'
module.exports = function(app){
    var userList = require('../controllers/userListController')

    app.route('/contacts/getMany')
        .get(userList.listAllUsers)
    app.route('/contacts/delete/:userId')
        .delete(userList.deleteAUser)
    app.route('/contacts/add')
        .post(userList.createAUser)
    
    app.route('/contacts/read/:userId')
        .get(userList.readAUser)
    
    // app.route('/contacts/deleteFirstname/:firstName')
    //     .delete(userList.deleteFirstname)
    
    app.route('/contacts/update/:userId')
        .put(userList.updateAUser)
    
    // app.route('/login/:userName')
    //     .get(userList.loginAUser)
}