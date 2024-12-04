import axios from "axios"

export const signInApi = (signInObj: any) => {
    let result = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", signInObj)
    return result
}
export const signUpApi = (signupObject: any) => {
    let result = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_app/swagger/api/#/User/post_bookstore_user_registration", signupObject)
    return result
}