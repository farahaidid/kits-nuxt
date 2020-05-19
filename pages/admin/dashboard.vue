<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Dashboard
      </h1>
      <h4>User ID: {{user.uid}}</h4>
      <h4>Name: {{user.displayName}}</h4>
      <h4>Email: {{user.email}}</h4>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters } from "vuex"
export default {
  layout: 'dark',
  components: {
    Logo
  },
  computed:{
    ...mapGetters("users",["user"]),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>