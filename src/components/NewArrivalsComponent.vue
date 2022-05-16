<template>
  <div class="new_arrivals">
    <div class="container">
      <div class="title">
        <hr />
        <span>Best Seller</span>
        <hr />
      </div>
      <div>Brand new products from top designers</div>
    </div>
    <Slider />
  </div>
</template>

<script>
import Slider from "@/components/SliderComponent.vue";
export default {
  name: "NewArrivalsComponent",
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
//New Arrivals
.new_arrivals {
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