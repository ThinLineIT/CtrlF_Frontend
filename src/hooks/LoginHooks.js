import axios from 'axios'
function loginHook(data) {
    const request = axios.post(`${NEXT_PUBLIC_BASE_API}/auth/login/`, data )
    .then(res => res.data)
    .catch(err => err.response)
    return request
}

export default loginHook