import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://yqfq9791yg.execute-api.us-east-1.amazonaws.com/dev'
})

export default axios