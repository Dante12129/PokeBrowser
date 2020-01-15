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
      current: undefined
    },
    getters: {
      name: state => {
        return state.pokemon[state.current-1] ? state.pokemon[state.current-1].name : "Select A Pokemon";
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
