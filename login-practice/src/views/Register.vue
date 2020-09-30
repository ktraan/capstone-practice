<template>
  <v-container class="text-center"
    ><h1>Register</h1>
    <v-row justify="center" class="mt-5">
      <v-cols>
        <v-text-field label="Username"></v-text-field>
      </v-cols>
    </v-row>
    <v-row justify="center">
      <v-cols cols="6">
        <v-text-field label="Password" type="password"> </v-text-field>
      </v-cols>
    </v-row>
    <v-row justify="center">
      <v-btn class="text-capitalize" color="blue">Enter</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Router"
};
</script>


