import axios from "axios";

interface ISignUp{
  
}



export const signInApi = async (signInObj: any) => {
  let result = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    }),
  });
  return await result.json();
};
export const signUpApi = (signupObject: any) => {
  let result = axios.post(
    "https://fakestoreapi.com/users",
    signupObject
  );
  return result;
};
