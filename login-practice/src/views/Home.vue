<template>
  <div>
    <h1>Home Page</h1>

    <v-row justify="center" class="mt-5">
      <v-cols>
        <v-text-field v-model="login.username" label="Username"></v-text-field>
      </v-cols>
    </v-row>
    <v-row justify="center">
      <v-cols cols="6">
        <v-text-field v-model="login.password" label="Password" type="password">
        </v-text-field>
      </v-cols>
    </v-row>
    <v-row justify="center">
      <v-btn v-on:click="submit" class="text-capitalize" color="blue"
        >Enter</v-btn
      >
    </v-row>
    <v-row justify="center" class="mt-2">Don't have an account?</v-row>
    <v-row justify="center">
      <router-link to="/register">Register Here.</router-link>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
};
</script>
