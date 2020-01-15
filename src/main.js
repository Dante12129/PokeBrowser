import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store: new Vuex.Store({
    state: {
      pokemon: [],
      current: Number
    },
    getters: {
      name: state => {
        return state.pokemon[state.current] ? state.pokemon[state.current].name : "none";
      },
      id: state => {
        return state.current;
      }
    },
    mutations: {
      insertPokemon(state, p) {
       state.pokemon.push(p);
      },
      sort(state) {
        state.pokemon.sort(((a, b) => {
          return a.id < b.id ? -1 : 1;
        }));
      },
      setCurrent(state, id) {
        state.current = id;
      }
    }
  })
}).$mount('#app');
