const axios = require('axios');

const commonAxios = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com/',
});

commonAxios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  },
);

export {commonAxios};
