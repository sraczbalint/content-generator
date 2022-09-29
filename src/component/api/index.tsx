import axios from 'axios'

const API = axios.create({
  baseURL: 'https://sraczb-content-creator-backend.herokuapp.com',
})

export function axiosPostCompletion(prompt: string | null) {
  return API.post(`/api/req`, prompt).then((res) => res)
}
