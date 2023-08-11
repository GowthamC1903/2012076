const axios = require("axios");
const getTrain =  async (req,res) => {

    const response =  await axios.get('http://20.244.56.144/train/trains', {
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3NDA2MzksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMjllMTZhNGItMzRjYy00ZTg3LTljY2QtZGUyZjRjYjQzNDNlIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMTIwNzYifQ.8SvFTNz5KCqSiAMQHkMeGeY317ffgdTeuu2pphVqSEg',}
        })

    
    res.json(response.data)
    
}

const getOneTrain = async (req,res) => {

    const result = await axios.get('http://20.244.56.144/train/trains/2344', {
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTE3NDA2MzksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiMjllMTZhNGItMzRjYy00ZTg3LTljY2QtZGUyZjRjYjQzNDNlIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMTIwNzYifQ.8SvFTNz5KCqSiAMQHkMeGeY317ffgdTeuu2pphVqSEg',}
        })

    res.json(result.data)
}

module.exports = {getTrain, getOneTrain };