import Vue from 'vue';
import Vuex from 'vuex';
import shared from './shared';
import products from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shared, products
  }
});
