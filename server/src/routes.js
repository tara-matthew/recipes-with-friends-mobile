const AuthenticationController = require ('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register',
    //console.log('here'),
        //AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    }
