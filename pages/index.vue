<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        kits-nuxt
      </h1>
      <h2 class="subtitle">
        nuxt version of kits
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import firebase from 'firebase'
import { mapActions } from "vuex"

export default {
  name: 'App',
  components: {
    Logo
  },
  asyncData() {
    return {
      authenticatedUser: null,
      email: 'test@test.com',
      password: 'Password',
      registrationPassword: '',
      needsAccount: true
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => (this.authenticatedUser = user))
    this.loginUser()
  },
  methods: {
    ...mapActions("users",["login"]),
    register() {
      if(this.password === this.registrationPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
      } else {
        // display error message
      }
    },
    async loginUser() {
      await this.login({
        email: this.email,
        password: this.password
      })
    },
    loginOrRegister() {
      if (this.needsAccount) {
        this.register()
      } else {
        this.login
      }
    },
    logout() {
      firebase.auth().signOut()
    }
  }
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
