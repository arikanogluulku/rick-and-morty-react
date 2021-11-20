/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class CharacterService {
  getAll(pageNumber) {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/?page=${pageNumber}`);
  }

  getCharacterById(id) {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/${id}`);
  }

  searchCharacter(name) {
    return axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/?name=${name}`);
  }
}
