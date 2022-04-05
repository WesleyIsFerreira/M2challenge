<template>
  <div>
    <NavBarVue />
    <TabCategory class="m-2" />
    <div class=" w-full sm:w-8/12 md:w-3/6 float-right">
      <Cart />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarVue from "../components/NavBar.vue"
import Cart from "../components/Cart.vue"
import TabCategory from "../components/TabCategories.vue"

export default {
  name: "Home",
  components: {
    NavBarVue,
    Cart,
    TabCategory
  }
}
</script>
