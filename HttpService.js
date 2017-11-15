const axios = require('axios');
const { Observable } = require('@reactivex/rxjs');

class RxHttpService {
  get(url, headers) {
    return Observable.fromPromise(axios.get(url, { headers }));
  };

  post(url, params, headers) {
    return Observable.fromPromise(axios.post(url, { headers, params }));
  };

  put(url, params, headers) {
    return Observable.fromPromise(axios.put(url, { headers, params }));
  };

  delete(url, headers) {
    return Observable.fromPromise(axios.delete(url, { headers }));
  };
};

module.exports = new RxHttpService();