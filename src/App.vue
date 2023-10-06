<script setup>

import { RouterView } from 'vue-router'

import boxheader from './views/boxheader.vue'



</script>


<template>
  
  <div class="header1">
    <header class="border-bottom lh-1 py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="link-secondary" href="#">
            <img src="https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-writing-tool-icon-design--stationery-icon-vector-design-png-image_900357.jpg" alt="" style="height: 100px; padding-left: 100px;" >
          </a>
        </div>

        <div class="col-4 text-center">
          <a class="blog-header-logo text-body-emphasis text-decoration-none" href="" style="font-size: 30px; font-family: fantasy;"> <span class="center">อุปกรณ์-เครื่องเขียน</span> </a>
        
        </div>
       
        <div class="buttonmenu">
          <nav>
            <RouterLink to="/" class="menu-link">>>></RouterLink>
            
            <RouterLink to="/menu" class="menu-link"><img src="https://www.svgrepo.com/show/4139/shopping-basket.svg" style="height:50px;"> 
              
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>
  </div>
  <div class="card1">
    <div class="container">
      <boxheader></boxheader>
      <RouterView/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};

</script>

<style scoped>


.card1{
  font: 1em sans-serif;
  background-image: url();

  
}
.menu-link {
  margin-right: 20px; 
  color: rgb(255, 255, 255);
  font-size:20px ;

}




</style>