<template>
  <div class="bg-gray-800 m-2 text-white p-2 text-center">
    <h2 class="font-semibold"><fa icon="cart-shopping" /> Seu carrinho</h2>
    <hr />
    <div>
      <div v-if="cart.internet">
        Produto: {{ cart.internet.name }} Preço:
        {{
          cart.internet.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </div>
      <div v-if="cart.fixo">
        Produto: {{ cart.fixo.name }} Preço:
        {{
          cart.fixo.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </div>
      <div v-if="cart.tv">
        Produto: {{ cart.tv.name }} Preço:
        {{
          cart.tv.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })
        }}
      </div>
    </div>
    <hr />
    <div>
      Total:
      {{
        cartValue.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
      }}
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Cart",
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    const cartValue = computed(() => store.getters.totalCart);

    return {
      cart,
      cartValue,
    };
  },
};
</script>