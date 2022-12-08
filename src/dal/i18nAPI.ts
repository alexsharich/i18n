import axios from "axios";

export const instance = axios.create({
  baseURL:'http://localhost:3001/'
})
/* instance.interceptors.request.use((config)=>{
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
}) */
export const i18nAPI ={
  registration(email:string,password:string,fullName:string){
    return instance.post('auth/register',{email,password,fullName})
  },
  login(data:LoginParamsType){
    return instance.post('auth/login',data)
  },
  me(){
    return instance.get('auth/me') 
  }
}
export type LoginParamsType = {
  email:string
  password:string
}