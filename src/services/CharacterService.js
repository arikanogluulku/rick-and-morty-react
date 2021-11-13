/* eslint-disable class-methods-use-this */
import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export default class CharacterService {
  getAll(pageNumber) {
    return axios.get(`${baseURL}/character/?page=${pageNumber}`);
  }

  getCharacterById(id) {
    return axios.get(`${baseURL}/character/${id}`);
  }
}
