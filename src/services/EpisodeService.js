import axios from 'axios';

export default class EpisodeService {
  getAll(pageNumber) {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episode/?page=${pageNumber}`);
  }
}
