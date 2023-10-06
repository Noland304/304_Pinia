<template>
    <div className="row my-4">
      <ProductListItem v-for="product in filteredProducts" 
      :key="product.id" :product="product" />
      
    </div>
  </template>
  
  <script setup>
  import ProductListItem from './ProductListItem.vue'
  import { useShoppingStore } from '../stores'
  
  const data = useShoppingStore();
  
  const filteredProducts = data.products.filter(product => product.id === 9);
  </script>
  
  <style>
  </style>