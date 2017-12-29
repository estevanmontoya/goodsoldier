<template>
  <section class="contained">
    <Optin/>
    <Welcome/>
    <Content/>
  </section>
</template>

<script>
import Optin from '~/components/Optin.vue'
import Welcome from '~/components/Welcome.vue'
import Content from '~/components/Content.vue'

export default {
  components: {
    Optin,
    Welcome,
    Content
  }
}
</script>
@import url('https://fonts.googleapis.com/css?family=Cardo|Raleway:200,400,900');
*, body, h1, h2, h3 {
  font-family: 'Raleway', sans-serif;
}
<style>
</style>
