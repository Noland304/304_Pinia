<template>
  
  <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
      <div class="col-lg-6 px-0">
        <h1 class="display-4 fst-italic">{{ text_title }}</h1>
        <p class="lead my-3"> {{ ex_box }}</p>
      </div>
    </div>

</template>

<script setup>
defineProps({
text_title: {
  type: String,
  required: true
},
ex_box: {
  type: String,
  required: true
}
})

</script>

<style>
header{
  background-color: rgb(179, 86, 76);
}

</style>