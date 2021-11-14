import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export default class EpisodeService {
  getAll(pageNumber) {
    return axios.get(`${baseURL}/episode/?page=${pageNumber}`);
  }
}
