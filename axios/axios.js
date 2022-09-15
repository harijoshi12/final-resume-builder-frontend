
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
const { currentToken } = useAuth()

export const axiosPublic = axios.create({
  baseURL: "http://192.168.1.39:5000/api"
})

export const axiosAuth = axios.create({
  baseURL: "http://192.168.1.39:5000/api"
})

axiosAuth.interceptors.request.use(async (config) => {
  config.headers.token = currentToken ? currentToken : ""
  return config
},
  (error) => {
    return Promise.reject(error)
  }
)