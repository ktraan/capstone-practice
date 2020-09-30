<template>
  <v-app-bar app color="red">
    <v-row class="ml-1">
      <div id="nav" class="d-flex" width="300">
        <v-btn color="red" min-width="30" width="35" rounded
          ><v-icon color="white">mdi-chevron-triple-right</v-icon></v-btn
        >
        <v-toolbar-title style="color:white" class="ml-3 mt-1 "
          >SC - Steven's Coders</v-toolbar-title
        >
      </div>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>
