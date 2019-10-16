const path = require('path')

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'recipeswithfriends',
        user: process.env.DB_USER || 'recipeswithfriends',
        password: process.env.DB_PASS || 'recipeswithfriends',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || '10.0.2.2',
            storage: path.resolve(__dirname, '../../recipeswithfriends.sqlite')
    }
},
}
