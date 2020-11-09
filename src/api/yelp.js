import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer EdD_2W30vpCoEhXoNwmbNAIzkW_CpftmSUnTyEry6wDQWoJUyn1DT7kK86_-X7sE9QOw7QNbRpo31izu2y62GBBKBuFACa4sJGXI-YiuLEgLKQbB3FLKdwVO-hWpX3Yx'
    }
})