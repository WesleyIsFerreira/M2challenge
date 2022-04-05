<template>
    <nav
      class="w-full flex flex-wrap items-center py-2 px-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
    >
        <img src="img/Logo.png" class="w-10 rounded-full">
        <label class="ml-3">
          <h1 class="font-bold">Super Store</h1>
        </label>
    </nav>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    page: String
  }
}
</script>