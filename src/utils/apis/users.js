import axios from '../url';

const LoginRequestUrl = `/users/login`;
const SignUpRequestUrl = `/users`

const LoginRequest = (params) => {
  return axios.post(LoginRequestUrl, params)
}

const SignUpRequest = (params) => {
  return axios.post(SignUpRequestUrl, params)
}

export {
  LoginRequest,
  SignUpRequest
}
