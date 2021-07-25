import axios from "axios";

export const signUpApi = (signUpData) => {
    const request  = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, signUpData)
    return request; 
}

export const emailAuthApi =( email ) => {
    
    const request = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/email`, {
        "email": email, 
    })
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