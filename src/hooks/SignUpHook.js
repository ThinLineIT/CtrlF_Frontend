import axios from "axios";

export const signUpApi = (signUpData) => {
    const request  = axios.post("http://testdeploy-dev.ap-northeast-2.elasticbeanstalk.com/api/auth/signup/", signUpData)
        .then(res => res.data)
        .catch(err => err.response)
    return request; 
}

export const emailAuthApi =( data ) => {
    const EMAIL = {
        "email" : data
    }
    const request = axios.post("http://testdeploy-dev.ap-northeast-2.elasticbeanstalk.com/api/auth/signup/email", EMAIL)
        .then(res => res.data)
        .catch(err => console.log(err.response))
    return request
}

export const overlapApi = (email) => {
    const request = axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/email/duplicate?data=${email}`)
    return request;
}

export const nickNameOverlap = (nick) => {
    const request = axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/nickname/duplicate?data=${nick}`)
    return request;
}