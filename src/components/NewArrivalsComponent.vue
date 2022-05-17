<template>
  <div class="new_arrivals">
    <div class="container">
      <div class="title">
        <hr />
        <span>New Arrivals</span>
        <hr />
      </div>
      <div class="fs-5 mt-3">Brand new products from top designers</div>
    </div>
    <Slider :c_class="'custom_fs_2'" :actions="'custom_fs_3'"/>
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
  padding: 5rem 2rem;
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
  background-color: transparent;
  display: none;
  border-radius: 0.3rem;
  animation-name: fadeIn;
  animation-duration: 0.7s;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  .title{
    font-size: 2rem;
    font-weight: bold;
  }
  .price{
    margin-top: 1rem;
    font-weight: bold;
    font-size: 2rem;
  }
  .actions{
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
  .actions>*:hover{
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