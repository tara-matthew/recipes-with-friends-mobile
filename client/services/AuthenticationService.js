import Api from '../services/Api'

export default {
    register(credentials) {

    return Api().post(
        'register',
        credentials).then(function(response) {
            console.log(response)
        }).catch(function(error) {
            console.log(error)
        })
    }
}
