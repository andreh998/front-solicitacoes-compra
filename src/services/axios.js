/**
 * Importação do axios que será responsável pelas requisições no back-end
 */
const axios = require('axios');


/**
 * Crio uma instancia do axios informando qual a URL base do back-end
 */
const instance = axios.create({
  baseURL: 'http://192.168.5.106:8080'
});

export default instance;