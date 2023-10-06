import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {id: 1,
                name:'ดินสอ',
                image:'https://media.allonline.7eleven.co.th/pdmain/357812_01_pencil_yoya.jpg',
                price: 5,
                Rating: 10,
                quantity:0},

                {id: 2,
                name:'ยางลบ',
                image:'https://media.allonline.7eleven.co.th/pdmain/357856-00-correction-tools-yoya-v1.jpg',
                price: 5,
                Rating: 7,
                quantity:0},

                {id: 3,
                name:'ปากกาน้ำเงิน',
                image:'https://media.allonline.7eleven.co.th/pdmain/376385_01_pen_yoya.jpg',
                price: 5,
                Rating: 8,
                quantity:0},

                {id: 4,
                name:'ปากกาแดง',
                image:'https://media.shopat24.com/pdmain/376399_01_pen_yoya.jpg',
                price: 5,
                Rating: 8,
                quantity:0},

                {id: 5,
                name:'ปากกาดำ',
                image:'https://media.shopat24.com/pdmain/376398_01_pen_yoya.jpg',
                price: 5,
                Rating: 7,
                quantity:0},

                {id: 6,
                name:'ไม้บรรทัด',
                image:'https://www.lamfa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/a/lamfa-stationery-0076_1.jpg',
                price: 10,
                Rating: 6,
                quantity:0},

                {id: 7,
                name:'สมุดโน๊ต',
                image:'https://pim-cdn0.ofm.co.th/products/zoom/5232010.jpg',
                price: 20,
                Rating: 10,
                quantity:0},

                {id: 8,
                name:'กระดาษ A4',
                image:'https://down-th.img.susercontent.com/file/3858bb2b47a9484ca0f2c5f6602b6c81',
                price: 55,
                Rating: 3,
                quantity:0},

                {id: 9,
                name:'กรรไกร',
                image:'https://www.homestyle.in.th/wp-content/uploads/2023/07/10-%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B9%84%E0%B8%81%E0%B8%A3%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7-%E0%B8%A2%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-.jpg',
                price: 50,
                Rating: 5,
                quantity:0},

                {id: 10,
                name:'ลิขวิด',
                image:'https://excelchoice.net/Media/Thumbs/0001/0001429--45-.jpg',
                price: 40,
                Rating: 10,
                quantity:0}
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'เพิ่มสินค้าอีก 1 รายการเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'เพิ่มสินค้าเรียบร้อย',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;

            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
 
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            
        }
        
    },
})