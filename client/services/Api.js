import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://192.168.0.15:3000`
    })
}

//Change the baseURL to computer's ip address when building for a device
//10.0.2.2 is for the Android emulator
