import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://front.opperdev.com/api'
  });

  export default instance