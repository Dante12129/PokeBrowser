import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store: new Vuex.Store({
    state: {
      pokemon: []
    },
    mutations: {
      insertPokemon(state, p) {
       state.pokemon.push(p);
     },
      sort(state) {
        state.pokemon.sort(((a, b) => {
          return a.id < b.id ? -1 : 1;
        }));
      }
    }
  })
}).$mount('#app');
