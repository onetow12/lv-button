<template>
  <h1 class="class-input">{{prop}}</h1>
</template>

<script lang="ts">

export default {
  name: "InputTaras",
  props: {
    prop: {
      required: true,
    }
  }
};
</script>

<style scoped>
.class-input{
    border: none;
    background: green;
    padding:1rem;
}
</style>