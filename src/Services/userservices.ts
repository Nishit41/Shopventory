import axios from "axios";

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
    "https://bookstore.incubation.bridgelabz.com/bookstore_app/swagger/api/#/User/post_bookstore_user_registration",
    signupObject
  );
  return result;
};
