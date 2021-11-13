import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export default class LocationService {
  getAll(pageNumber) {
    return axios.get(`${baseURL}/location/?page=${pageNumber}`);
  }
}
