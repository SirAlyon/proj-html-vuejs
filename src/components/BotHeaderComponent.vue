<template>
  <div class="bot_head">
    <div class="container">
      <div class="logo">
        <img :src="require('@/assets/img/' + logo_src)" alt="" />
      </div>
      <div class="menu">
        <a href="#" v-for="(item, index) in menuItems" :key="index">
          {{ item }}
          <span class="custom-fs">
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </span>
        </a>
        <!--           <a href="#">
            Shop
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </a>
          <a href="#">
            Products
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </a>
          <a href="#">
            Categories
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </a>
          <a href="#">
            News
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </a>
          <a href="#">
            Elements
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </a> -->
        <span class="shop_now"> SHOP NOW! </span>
        <div class="search mx-3">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BotHeader",
  props: {
    menuItems: Array,
    logo_src: String,
  },
};
</script>

<style lang="scss" scoped>
.bot_head {
  display: flex;
  padding: 1rem 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    max-width: 100%;
  }
  .logo > img {
    height: 60px;
  }
  a {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    margin-left: 1rem;
  }
  .shop_now {
    background-color: #427ed5;
    padding: 0.7rem 2rem;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
  }

  .menu {
    display: flex;
    align-items: center;
  }
  .custom-fs{
      font-size: 0.8rem;
  }
}
</style>
