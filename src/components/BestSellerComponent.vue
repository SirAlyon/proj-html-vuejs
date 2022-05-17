<template>
  <div class="best_seller">
    <div class="container">
      <div class="title">
        <hr />
        <span>Best Seller</span>
        <hr />
      </div>
      <div>Must have products from out top sellers</div>
      <Slider :c_class="'custom_fs_1'"/>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/SliderComponent.vue";
export default {
  name: "BestSellerComponent",
  components:{
    Slider,
  }
  
};
</script>

<style scoped lang='scss'>
.best_seller {
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
}


</style>