<template>
  <v-app>
    <Header />
    <v-container class="text-center">
      <div class="nav mt-15 ">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>

      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import Header from './views/Header';

export default {
  name: 'App',

  components: { Header },

  data: () => ({
    // login: {
    //   username: "",
    //   password: ""
    // }
  }),
  methods: {
    submit: function() {
      // console.log(this.login.username);
    },
  },
};
</script>
