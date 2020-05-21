/**
 * Importação do axios que será responsável pelas requisições no back-end
 */
const axios = require('axios');


/**
 * Crio uma instancia do axios informando qual a URL base do back-end
 */
const instance = axios.create({
  baseURL: 'http://localhost:8080'
});

export default instance;