import { createStore } from 'vuex'
import Cookies from '../api/CookiesService'

const store = createStore({
  state: {
    authToken: Cookies.getToken() || '',
    userRole: Cookies.getRole() || '',
    email: Cookies.getEmail() || '',
    name: Cookies.getName() || '',
    id: Cookies.getId() || ''
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token
      Cookies.setToken(token)
    },
    setUserRole(state, role) {
      state.userRole = role
      Cookies.setRole(role)
    },
    setEmail(state, email) {
      state.email = email
      Cookies.setEmail(email)
    },
    setName(state, name){
      state.name = name
      Cookies.setName(name)
    },
    SetId(state, id){
      state.id = id
      Cookies.setId(id)
    },
    clearAll(state) {
      state.authToken = ''
      state.email = ''
      state.userRole = ''
      state.name = ''
      state.id = ''
      Cookies.clearAll()
    }
  },
  actions: {
    login({ commit }, { token, role, name, email, id }) {
      commit('SetId', id)
      commit('setAuthToken', token)
      commit('setUserRole', role)
      commit('setName', name)
      commit('setEmail', email)
    },
    logout({ commit }) {
      commit('clearAll')
    }
  },
  getters: {
    isAuthenticated: state => !!state.authToken,
    userRole: state => state.userRole,
    email: state => state.email,
    name: state => state.name,
    id: state => state.id
  }
})

export default store