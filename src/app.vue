<template>
    <input type="text" v-model="input" placeholder="Sök recept..." />
   <div class="item recipe" v-for="recipe in filteredList()" :key="recipe">

     <p> {{ recipe }} </p>

   </div>
   <div class="item error" v-if="input&&!filteredList().length">

      <p>No results found!</p>

   </div>
 </template>

<script setup>
    import { ref } from "vue";
    let input = ref("");
    const recipes = ["ghee", "mayak", "bibibamp"];
    function filteredList() {
      return recipes.filter((recipe) =>
        recipe.toLowerCase().includes(input.value.toLowerCase())
      );
    }
    </script>