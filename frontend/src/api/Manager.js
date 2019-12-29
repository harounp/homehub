import Axios from 'axios'

const getAxios = () => {
  return Axios.create({
    baseURL: "http://localhost:8000/"
  })
}

export default getAxios