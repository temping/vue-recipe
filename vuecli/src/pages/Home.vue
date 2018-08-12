<template>
  <DefaultLayout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </DefaultLayout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'home',
  components: {
    DefaultLayout
  }
}
</script>
