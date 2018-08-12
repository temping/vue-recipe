<template>
  <DefaultLayout>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
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
