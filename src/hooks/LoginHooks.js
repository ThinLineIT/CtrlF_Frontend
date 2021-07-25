import axios from 'axios'
function loginHook(loginData) {
    const request = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, loginData)
        
    return request; 
}

export default loginHook