import axios from "axios";

const instance = axios.create({
    headers:{
      crossDomain: true,
      'Access-Control-Allow-Origin':'*'
    },
  baseURL: 'https://stocksentibackend.azurewebsites.net/',
});

export const stockAPI = {
  entitiesConfigurationController() {
    return instance.get('entitiesconfig')
  }
}

export const googleNewsController = {
  googleNewsStream (instrument, date = new Date().toISOString()) {
    return instance.get(`googlenewsstream/${instrument}/since/${date}`)
  },
}

// export const twitterNewsController = {
//   twitterNewsStream (instrument, date = new Date().toISOString()) {
//     return instance.get(`googlenewsstream/${instrument}/since/${date}`)
//   },
// }
