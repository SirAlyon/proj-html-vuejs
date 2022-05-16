<template>
  <div class="slider">
    <div
      class="col-c"
      v-for="(product, index) in bestSeller"
      :key="index"
      v-show="activeIndex <= index && index <= activeIndex + 4"
    >
      <img :src="require('@/assets/img/products/' + product.src)" alt="" />
    </div>
    <div class="arrows">
      <span @click="slideLeft">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </span>
      <span @click="slideRight">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </span>
    </div>
    <!--         <div class="col-c">
          <img
            src="@/assets/img/little_slider/modern_black_leather_suit-200x260.jpg"
            alt=""
          />
        </div>
        <div class="col-c">
          <img
            src="@/assets/img/little_slider/hipster_black_top-200x260.jpg"
            alt=""
          />
        </div>
        <div class="col-c">
          <img
            src="@/assets/img/little_slider/blue_leather_jacket-200x260.jpg"
            alt=""
          />
        </div> -->

    <!-- <img src="@/assets/img/slider/black_leather_jacket-400x520.jpg" alt=""> -->
  </div>
</template>

<script>
import state from "@/state.js";
export default {
  name: "SliderComponent",
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
    &:hover{
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
</style>