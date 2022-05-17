<template>
  <div class="slider">
    <div
      class="col-c"
      v-for="(product, index) in bestSeller"
      :key="index"
      v-show="activeIndex <= index && index <= activeIndex + 4"
    >
      <div class="product_img">
        <img :src="require('@/assets/img/products/' + product.src)" alt="" />
        <div class="card_overlay" v-if="overlay">
          <div class="title">{{ product.name }}</div>
          <div class="categories">
            <span v-for="(cat, index) in product.category" :key="index"
              >{{ styleCategory(cat, index, product.category) }}
            </span>
          </div>
          <div class="price">${{ product.final_price }}</div>
          <div class="actions fw-bold">
            <span>
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              Add to cart
            </span>
            <span>
              <font-awesome-icon icon="fa-solid fa-list-ul" />
              Details
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="arrows">
      <span @click="slideLeft">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </span>
      <span @click="slideRight">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </span>
    </div>
  </div>
</template>

<script>
import state from "@/state.js";
export default {
  name: "SliderComponent",
  props: {
    overlay: Boolean,
  },
  data() {
    return {
      bestSeller: null,
      activeIndex: 0,
    };
  },
  methods: {
    slideRight() {
      if (this.activeIndex + 4 === this.bestSeller.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
        //console.log(this.activeIndex);
      }
    },
    slideLeft() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
        //console.log(this.activeIndex);
      } else if (this.activeIndex === 0) {
        this.activeIndex = this.bestSeller.length - 5;
      }
    },
    styleCategory(str, index, array) {
      if (index == array.length - 1) {
        return `${str}.`;
      } else {
        return `${str},`;
      }
    },
  },
  mounted() {
    console.log(state.products);
    this.bestSeller = state.products;
  },
};
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  padding: 4rem 0;
  position: relative;
  .arrows {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
  }
  .arrows > span {
    display: inline-block;
    color: white;
    padding: 1rem 0.5rem;
    background-color: rgba(128, 128, 128, 0.665);
    &:hover {
      background-color: rgb(128, 128, 128);
    }
  }
}
img {
  height: auto;
  width: 100%;
}
.col-c {
  width: 20%;
}
.product_img {
  position: relative;
  &:hover .card_overlay {
    display: flex;
  }
}
.card_overlay {
  height: 100%;
  width: 80%;
  margin: 0 10%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    rgba(90, 137, 212, 0.96),
    rgba(237, 165, 210, 1)
  );
  display: none;
  border-radius: 0.3rem;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
  .price {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
  .actions {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 5%;
    transform: translateX(-50%);
    left: 50%;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .actions > *:hover {
    cursor: pointer;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>