import axios from '../url';

const eventListUrl = `/events`;

const fetchEventList = () => {
  return axios.get(eventListUrl)
}

export {
  fetchEventList
}
