import axios from 'axios'

const apicenter = axios.create({

    baseURL:"http://localhost:4000"
})

export default apicenter