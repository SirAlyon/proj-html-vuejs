<template>
  <div class="review_products">
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="(prev, index) in previews" :key="index">
          <div :class="'preview preview_' + prev.name">
            <h5>{{ prev.name }}</h5>
            <div
              class="prev_card"
              v-for="(product, index) in products"
              :key="index"
              v-show="prev.ids.includes(product.id)"
            >
              <div class="row">
                <div class="col-8">
                  <span>{{ product.name }}</span>
                  <div class="stars">
                    <font-awesome-icon
                      icon="fa-solid fa-star"
                      v-for="(star, index) in product.rate"
                      :key="index"
                    />
                  </div>
                  <strong v-if="prev.name !== 'LATEST REVIEWS'">${{ product.final_price }}</strong>
                  <strong v-else>by Admin</strong>
                </div>
                <div class="col-4">
                  <img
                    :src="require('@/assets/img/products/' + product.src)"
                    alt=""
                  />
                </div>
              </div>
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
  name: "ReviewProducts",
  data() {
    return {
      previews: null,
      products: null,
    };
  },
  mounted() {
    this.previews = state.previews
    this.products = state.products;
  },
};
</script>

<style lang="scss" scoped>
.preview {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  text-align: start;
  .prev_card {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(188, 188, 188, 0.569);
    transition: linear 0.1s;
    &:hover{
      transform: scale(1.1);
      //border: 1px solid rgba(188, 188, 188, 0.569);
      cursor: pointer;
    }
  }
  .stars {
    color: #427ed5;
  }
}
</style>