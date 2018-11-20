
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const state = {
  pjtnews: 0,
  isCollapse:false
}

const getters={
  changeChartWidth: state => {
    return state.isCollapse;
  }
};

const mutations = {
}
export default new Vuex.Store({
  state,
  getters,
  mutations
});