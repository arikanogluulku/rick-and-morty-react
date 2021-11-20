import axios from 'axios';

export default class LocationService {
  getAll(pageNumber) {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/location/?page=${pageNumber}`);
  }
}
