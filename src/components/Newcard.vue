<template>
<div class="cardall">
<div class="row mb-2 ">
        <div class="col-md-6 " v-for="(n,i) in menuList" :key="n">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="card-bg col p-4 d-flex flex-column position-static">
              <div class="menulistA">
              <strong class="d-inline-block mb-2 text-primary-emphasis "><span class="number">สินค้า {{ i+1 }}</span> </strong>
              <h3 class="mb-0"><br>{{n.title}}</h3>
              <div class="mb-1 text-body-secondary "> 
                <span class="price-text">ราคา  {{n.price}} บาท </span>
                <h4 class="card-rating1">Rating : {{ n.rating }}</h4>
                </div>
              </div>
              <p class="card-text mb-auto">{{n.text_box}}</p>
              
              <div style="margin-bottom: 10px;">
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link" >
                
                <button class="black-text">เลือกสินค้า</button>
                <svg class="bi" style="background-color: rgb(179, 206, 255); color: rgb(21, 48, 128);"> <use xlink:href="#chevron-right"/></svg>
             </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block ">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="0" width="300" height="300" />
              </svg>
            </div>
          </div>
        </div>

      
    </div>
  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';



const menuList = ref ([ 
    {title:'ดินสอ',
    img:'https://media.allonline.7eleven.co.th/pdmain/357812_01_pencil_yoya.jpg',
    price: 5,
    rating: 10},

    {title:'ยางลบ',
    img:'https://media.allonline.7eleven.co.th/pdmain/357856-00-correction-tools-yoya-v1.jpg',
    price: 5,
    rating: 7},

    {title:'ปากกาน้ำเงิน',
    img:'https://media.allonline.7eleven.co.th/pdmain/376385_01_pen_yoya.jpg'
    ,price: 5,
    rating: 8},

    {title:'ปากกาแดง',
    img:'https://media.shopat24.com/pdmain/376399_01_pen_yoya.jpg',
    price: 5,
    rating: 8},

    {title:'ปากกาดำ',
    img:'https://media.shopat24.com/pdmain/376398_01_pen_yoya.jpg',
    price: 5,
    rating: 7},

    {title:'ไม้บรรทัด',
    img:'https://www.lamfa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/a/lamfa-stationery-0076_1.jpg',
    price: 10,
    rating: 6},

    {title:'สมุดโน๊ต',
    img:'https://pim-cdn0.ofm.co.th/products/zoom/5232010.jpg',
    price: 20,
    rating: 10},

    {title:'กระดาษ A4',
    img:'https://down-th.img.susercontent.com/file/3858bb2b47a9484ca0f2c5f6602b6c81',
    price: 55,
    rating: 10},

    {title:'กรรไกร',
    img:'https://www.homestyle.in.th/wp-content/uploads/2023/07/10-%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B9%84%E0%B8%81%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7-%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-.jpg',
    price: 50,
    rating: 5},

    {title:'ลิขวิด',
    img:'https://excelchoice.net/Media/Thumbs/0001/0001429--45-.jpg',
    price: 40,
    rating: 10}
])




</script>

<style >
.card-bg{
  
  background:rebeccapurple;
  color: rgb(255, 255, 255);
}
.black-text {
  background-color: rgb(235, 255, 251);
  margin-top: 20px;
  color: rgb(47, 96, 69); 

}
.price-text{
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
  padding-inline: 10px;
  font-size: 20px;


}
.number{
  color: rgb(255, 255, 255);
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 10px;
  padding-bottom:10px;
  font-size: 20px;
  
  
  background: rgb(9, 27, 48);
}
.cardall{
  background: rgba(240, 34, 34, 0.374);
  padding: 20px;
  margin: 20px;
  border-top: 2px solid #ffffff ;
  border-left: 2px solid #ffffff ;
  box-shadow: 20px #5a45ae;
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  
}
.card-rating1{
  color: #ffffff;
}
.menulistA{
  text-align: center;

}
.mb-0{
  font-size: 30px;
  
}
</style>