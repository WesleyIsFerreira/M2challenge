import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      fixo: '',
      tv: '',
      internet: ''
    }
  },
  getters: {
    totalCart(state){
      let total = 0
      Object.keys(state.cart).map(function(key) {
        if (state.cart[key].price != undefined){
          total += state.cart[key].price
        }
      })
      console.log(total)
      return total
    }
  },
  mutations: {
    UPDATE_CART(state, newcart){
      state.cart = newcart
    }
  },
  actions: {
  },
  modules: {
  }
})
