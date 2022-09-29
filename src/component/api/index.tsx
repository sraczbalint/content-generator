import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8800',
})

export function axiosPostCompletion(prompt: string | null) {
  return API.post(`/api/req`, prompt).then((res) => res)
  // console.log('apipost', await API.post(`/api/req`))
}
