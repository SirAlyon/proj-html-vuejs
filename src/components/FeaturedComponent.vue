<template>
  <div class="featured">
    <div class="container">
      <div class="title">
        <hr />
        <span>Featured Products</span>
        <hr />
      </div>
      <div>Must have products from out top sellers</div>
      <div class="gender">
        <span class="categories active" @click="getFilter('Men', $event)">MEN</span>
        <span class="categories" @click="getFilter('Women', $event)">WOMEN</span>
        <span class="categories" @click="getFilter('Accessories', $event)">ACCESSORIES</span>
      </div>
      <div class="featured_card">
        <div class="col-3" v-for="(product, index) in products" :key="index" v-show="product.genre == filterProduct">
          <div class="product">
            <img :src="require('@/assets/img/products/' + product.src)" alt="" />
            <div class="name">{{product.name}}</div>
            <div class="info">{{product.info}}</div>
            <div class="price">
              <span class="discounted_price" v-if="product.original_price !== null">${{product.original_price}}</span>
              <span>${{product.final_price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import state from "@/state.js";
export default {
  name: "FeaturedComponent",
  data() {
    return {
      filterProduct: 'Men',
      products: null
    }
  },
  methods: {
      getFilter(word, event){
          //console.log(this.filterProduct, word);
          this.filterProduct = word
          
          const categories = document.querySelectorAll('.categories')
          //console.log(categories);
          categories.forEach(category =>{
              if (category.className.includes('active')){
                  category.classList.remove('active')
              }
          })
          //console.log(event.target);
          event.target.classList.toggle('active')
      },

  },
  mounted(){
    console.log(state.products);
    this.products = state.products
  }
};
</script>

<style scoped lang='scss'>
//Featured Products
.featured {
  padding: 5rem 0;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 2rem;
      font-weight: bold;
    }
    hr {
      width: 27%;
      margin-right: 2rem;
      margin-left: 2rem;
      border: 0.5px solid rgba(128, 128, 128, 0.5);
    }
  }
  .gender {
    span {
      display: inline-block;
      font-weight: bold;
      margin-top: 4rem;
      padding: 1rem 3.5rem;
      border: 1px solid lightgray;
      background-color: rgba(211, 211, 211, 0.5);
      &:hover {
        background-color: white;
      }
    }
    .active{
        background-color: white;
    }
  }
  .featured_card {
    display: flex;
    justify-content: space-around;
    .product {
      margin-top: 2rem;
      text-align: start;
      .name {
        font-weight: bold;
        font-size: 1.2rem;
      }
      .info {
        color: gray;
      }
      .price {
        margin-top: 0.7rem;
        color: #427ed5;
        font-size: 1.2rem;
        .discounted_price {
          text-decoration: line-through;
          font-size: 1rem;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
