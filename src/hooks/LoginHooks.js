import axios from 'axios'
function loginHook(data) {
    const request = axios.post('http://testdeploy-dev.ap-northeast-2.elasticbeanstalk.com/api/auth/login/', data )
    .then(res => res.data)
    .catch(err => err.response)
    return request
}

export default loginHook