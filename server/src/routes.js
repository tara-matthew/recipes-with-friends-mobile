const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/', function(req, res, next) {
        res.send("Hello world");
    });

     app.post('/register',
         AuthenticationControllerPolicy.register,
         AuthenticationController.register
 )}
