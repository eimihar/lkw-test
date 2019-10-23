export default class ApiService {
  axios = null;
  config = null;

  constructor(config, axios) {
    this.config = config;
    this.axios = axios;
  }

  get(path) {
    return this.axios(this.config.apiUrl + path);
  }

  post(path) {
    return this.axios(this.config.apiUrl + path);
  }
}