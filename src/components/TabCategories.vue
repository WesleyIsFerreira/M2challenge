<template>
  <div class="shadow-xl rounded-md border-2 border-gray-200 py-3">
    <ul
      class="
        nav nav-tabs nav-justified
        flex flex-col
        md:flex-row
        flex-wrap
        list-none
        border-b-0
        pl-0
        mb-4
      "
      id="tabs-tabJustify"
      role="tablist"
    >
      <li class="nav-item flex-grow text-center" role="presentation">
        <a
          href="#tabs-homeJustify"
          class="
            nav-link
            w-full
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
            active
          "
          id="tabs-home-tabJustify"
          data-bs-toggle="pill"
          data-bs-target="#tabs-homeJustify"
          role="tab"
          aria-controls="tabs-homeJustify"
          aria-selected="true"
          >Internet</a
        >
      </li>
      <li class="nav-item flex-grow text-center" role="presentation">
        <a
          href="#tabs-profileJustify"
          :class="[hasNet ? '' : 'disabled']"
          class="
            nav-link
            w-full
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          "
          id="tabs-profile-tabJustify"
          data-bs-toggle="pill"
          data-bs-target="#tabs-profileJustify"
          role="tab"
          aria-controls="tabs-profileJustify"
          aria-selected="false"
          >Tv</a
        >
      </li>
      <li class="nav-item flex-grow text-center" role="presentation">
        <a
          href="#tabs-messagesJustify"
          :class="[hasNet ? '' : 'disabled']"
          class="
            nav-link
            w-full
            block
            font-medium
            text-xs
            leading-tight
            uppercase
            border-x-0 border-t-0 border-b-2 border-transparent
            px-6
            py-3
            my-2
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          "
          id="tabs-messages-tabJustify"
          data-bs-toggle="pill"
          data-bs-target="#tabs-messagesJustify"
          role="tab"
          aria-controls="tabs-messagesJustify"
          aria-selected="false"
          >Telefone Fixo</a
        >
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContentJustify">
      <div
        class="tab-pane fade show active p-2"
        id="tabs-homeJustify"
        role="tabpanel"
        aria-labelledby="tabs-home-tabJustify"
      >
        <h3 class="font-semibold text-purple-600">Internet</h3>
        <p>Selecione um plano de internet para continuar</p>

        <div class="flex flex-wrap mt-3">

          <div class="flex mr-2 mb-2">
            <div class="form-check">
              <div class="block p-6 rounded-lg shadow-lg border-2 bg-white w-40">
                <input
                  class="mb-1 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="radioInternet" 
                  id="nullInternet"
                  value=""
                  v-model="cart.internet"
                  checked
                >
                <div for="nullInternet">
                  <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">Nenhum</h5>
                  <p class="text-gray-700 text-base mb-4">
                    R$ 0,00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-for="item in internetList" :key="item.id" class="flex mr-2 mb-2">
            <div class="form-check">
              <div class="block p-6 rounded-lg shadow-lg border-2 bg-white w-40">
                <input 
                  class="mb-1 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="radioInternet" 
                  :id="item.id"
                  :value="item"
                  v-model="cart.internet"
                >
                <div for="{{item.id}}">
                  <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">{{item.name}}</h5>
                  <p class="text-gray-700 text-base mb-4">
                    {{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div
        class="tab-pane fade p-2"
        id="tabs-profileJustify"
        role="tabpanel"
        aria-labelledby="tabs-profile-tabJustify"
      >
        <h3 class="font-semibold text-purple-600">TV</h3>
        <p>Selecione um plano de TV</p>

        <div class="flex flex-wrap mt-3">
          <div class="flex mr-2 mb-2">
            <div class="form-check">
              <div class="block p-6 rounded-lg shadow-lg border-2 bg-white max-w-sm w-52">
                <input 
                  class="mb-1 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="radioTv" 
                  id="nullTv"
                  value=""
                  v-model="cart.tv"
                  :checked="[hasNet]"
                >
                <div for="nullTv">
                  <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">Nenhum</h5>
                  <p class="text-gray-700 text-base mb-4">
                    R$ 0,00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-for="item in tvList" :key="item.id" class="flex mr-2 mb-2">
            <div class="form-check">
              <div class="block p-6 rounded-lg shadow-lg border-2 bg-white max-w-sm w-52">
                <input 
                  class="mb-1 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="radioTv" 
                  :id="item.id"
                  :value="item"
                  v-model="cart.tv"
                >
                <div for="{{item.id}}">
                  <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">{{item.name}}</h5>
                  <p class="text-gray-700 text-base mb-4">
                    {{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade p-2"
        id="tabs-messagesJustify"
        role="tabpanel"
        aria-labelledby="tabs-profile-tabJustify"
      >
        <h3 class="font-semibold text-purple-600">Fixo</h3>
        <p>Selecione um plano de fixo</p>

        <div class="flex flex-wrap mt-3">

          <div class="flex mr-2">
            <div class="form-check">
              <div class="block p-6 rounded-lg shadow-lg border-2 bg-white w-60">
                <input 
                  class="mb-1 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="radioFixo" 
                  id="nullFixo"
                  value=""
                  v-model="cart.fixo"
                  :checked="[hasNet]"
                >
                <div for="nullFixo">
                  <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">Nenhum</h5>
                  <p class="text-gray-700 text-base mb-4">
                    R$ 0,00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-for="item in fixoList" :key="item.id" class="flex mr-2">
            <div class="form-check">
              <div class="block p-6 rounded-lg shadow-lg border-2 bg-white w-60">
                <input 
                  class="mb-1 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                  type="radio" 
                  name="radioFixo" 
                  :id="item.id"
                  :value="item"
                  v-model="cart.fixo"
                >
                <div for="{{item.id}}">
                  <h5 class="text-gray-900 text-lg leading-tight font-medium mb-2">{{item.name}}</h5>
                  <p class="text-gray-700 text-base mb-4">
                    {{item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Product from "../services/product"
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  name: "Cart",
  setup(){

    const store = useStore()

    let hasNet = ref(false)

    const fixoList = ref([])
    const tvList = ref([])
    const internetList = ref([])

    const cart = ref({
      fixo: '',
      tv: '',
      internet: ''
    })

    watch(
      () => cart.value,
      () => {
          console.log('MUDOU')
          if(cart.value.internet === ""){
            hasNet.value = false
            cart.value.fixo = ''
            cart.value.tv = ''
            cart.value.internet = ''
          }
          else
            hasNet.value = true

          store.commit('UPDATE_CART', cart.value)
        },
        { deep: true }
      )

    Product.get()
      .then((resp) => {
        resp.data.map(function(product) {
          if(product.category_id == 1)
            fixoList.value.push(product)
          else if(product.category_id == 2)
            tvList.value.push(product)
          else
            internetList.value.push(product)
        })
      })
      .catch(function (error) {
        console.log(error)
      })

    return {
      fixoList,
      tvList,
      internetList,
      cart,
      hasNet
    }
  }
}
</script>