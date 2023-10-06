<script setup>
import newcard from '../components/Newcard.vue'



</script>

<template>
        <newcard></newcard>

      <!--Side bar-->
      <div class="abote_1">
          <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">
              <div class="p-4 mb-3 bg-body-tertiary rounded">
               
                
              </div>
          </div>
          <div class="Box_new">
      
              <div class="abote_2">
                
                <ul class="list-unstyled">
                  <li>
                    
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#" v-for="(i,index) in Box_news" :key="index">
                    <svg class="bd-placeholder-img"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <image :xlink:href="i.img" x="0" y="40" width="200px" />
                    </svg>
                      <div class="col-lg-8">
                        <h6 class="mb-0">{{i.name }}</h6>
                        <small class="text-body-secondary">{{i.data_time}}</small>
                      </div>
                    </a>
                  
                  </li>
                </ul>
              </div>
              </div>
            </div>

      
      
      
      </div>
    
</template>

<style>
.abote1,.abote2{
  background: rgb(16, 55, 58);
  color: aliceblue;



}
.Box_new{
  background: white;
  padding: 20px;
  margin: 0;
}



</style>