import { getCurrentUser } from "./helpers/auth";
import Axios from "axios";

const user = getCurrentUser();

export default {
  state: {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_errors: null,
    customers: []
  },

  getters: {
    currentUser(state){
      return state.currentUser;
    },

    isLoggedIn(state){
      return state.isLoggedIn;
    },

    isLoading(state){
      return state.isLoading;
    },

    authErrors(state){
      return state.auth_errors;
    },

    customers(state){
      return state.customers;
    }
  },

  mutations: {

    attemptLogin(state){
      state.loading = true;
      state.auth_errors = null;
    },

    loginSucceed(state, payload){
      state.loading = false;
      state.auth_errors = null;
      state.isLoggedIn = true;
      state.currentUser = Object.assign({}, payload.user, { token: payload.access_token });

      localStorage.setItem('user', JSON.stringify(state.currentUser));
    },

    loginFailed(state, payload){
      state.loading = false;
      state.auth_errors = payload.err;
    },    

    logout(state){
      state.loading = false;
      localStorage.removeItem('user');
      state.currentUser = null;      
    },

    updateCustomers(state, payload){
      state.customers = payload
    }

  },

  actions: {
    login(context){
      context.commit('attemptLogin');
    },

    getAllCustomers(context){
      Axios.get('/api/customers').then((resp) => {
        context.commit('updateCustomers', resp.data.customers);
      })
    }
  }
}