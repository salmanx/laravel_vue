import Axios from "axios";

export function login(credentials){
  return new Promise((resolve, reject) => {
    Axios.post('/api/auth/login', credentials)
      .then((resp) => {
        resolve(resp.data);
      }).catch((err) => {
        reject("wrong username/password");
      });
  })
}

export function getCurrentUser(){
  let user = localStorage.getItem('user');

  if(!user)
    return null;

  return JSON.parse(user);  
}