export const EMPTY_STRING = "";
export const headerConfig = {
    method: "GET",
    headers: {
      "x-access-token": localStorage.getItem("token") || EMPTY_STRING,
    },
  };