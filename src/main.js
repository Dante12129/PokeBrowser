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
      current: 0
    },
    getters: {
      p: state => {
        return state.pokemon[state.current] ? state.pokemon[state.current] : {name:"Select A Pokemon", id: 0, type:"None"}
      }
    },
    mutations: {
      clear(state) {
        state.pokemon.length = 0;
        state.current = undefined;
        state.pokemon.push({name:"Select A Pokemon", id: 0, type:"None"});
      },
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
