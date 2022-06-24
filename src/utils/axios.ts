import Axios from 'axios'

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URI,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 2000,
  withCredentials: true,
})
