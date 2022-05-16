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
        <span class="categories" @click="getFilter('Men', $event)">MEN</span>
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
        <!-- <div class="col-3">
          <div class="product">
            <img src="@/assets/img/black_elegant_leather_jacket.jpg" alt="" />
            <div class="name">Black Leather Jacket</div>
            <div class="info">Men, Jackets, Jeans</div>
            <div class="price">
              <span class="discounted_price">$235</span>
              <span>$200</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="product">
            <img src="@/assets/img/black_elegant_leather_jacket.jpg" alt="" />
            <div class="name">Black Leather Jacket</div>
            <div class="info">Men, Jackets, Jeans</div>
            <div class="price">
              <span class="discounted_price">$235</span>
              <span>$200</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="product">
            <img src="@/assets/img/black_elegant_leather_jacket.jpg" alt="" />
            <div class="name">Black Leather Jacket</div>
            <div class="info">Men, Jackets, Jeans</div>
            <div class="price">
              <span class="discounted_price">$235</span>
              <span>$200</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedComponent",
  data() {
    return {
       filterProduct: 'Men',
      products: [
        {
          name: "Black Leather Jacket",
          category: ["Man", "Jackets", "Jeans"],
          original_price: 270,
          final_price: 220,
          src: "black_elegant_leather_jacket.jpg",
          genre: "Men",
        },
        {
          name: "Black Leather Suit",
          category: ["Man", "Jackets"],
          original_price: 250,
          final_price: 200,
          src: "black_leather_suit.jpg",
          genre: "Men",
        },
        {
          name: "Blue Jacket & Stripe Tee",
          category: ["Man", "Jackets", "Suits"],
          original_price: null,
          final_price: 580,
          src: "blue_jacket_and_white_stripe_tee.jpg",
          genre: "Men",
        },
        {
          name: "Modern Black Leather",
          category: ["Man", "Jackets"],
          original_price: null,
          final_price: 96,
          src: "modern_black_leather_suit.jpg",
          genre: "Men",
        },
        {
          name: "Black Leather Jacket",
          category: ["Woman", "Jackets", "Jeans"],
          original_price: 250,
          final_price: 200,
          src: "black_leather_jacket.jpg",
          genre: "Women",
        },
        {
          name: "Modern Love Outfit",
          category: ["Woman", "Outfit", "T-Shirt"],
          original_price: 150,
          final_price: 100,
          src: "modern_love_tee.jpg",
          genre: "Women",
        },
        {
          name: "Spring Dress Outfit",
          category: ["Woman", "Outfit"],
          original_price: 250,
          final_price: 220,
          src: "spring_printed_dress.jpg",
          genre: "Women",
        },
        {
          name: "Casual Belt",
          category: ["Accessories", "Belt"],
          original_price: 100,
          final_price: 90,
          src: "casual_leather_belts.jpg",
          genre: "Accessories",
        },
        {
          name: "Brown Dress Shoes",
          category: ["Accessories", "Shoes"],
          original_price: 600,
          final_price: 570,
          src: "brown_dress_shoes.jpg",
          genre: "Accessories",
        },
      ],
    };
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
