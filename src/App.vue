<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="bot_head">
          <img src="@/assets/img/classic_shop_logo2x.png" alt="" />
          <div class="menu">
            <a href="#">
              Home
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </a>
            <a href="#">
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
            </a>
            <span class="shop_now">
              SHOP NOW!
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "~/node_modules/bootstrap/scss/bootstrap.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bot_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  a {
    color: black;
    text-decoration: none;
    margin-right: 0.7rem;
    margin-left: 0.7rem;

  }
  .shop_now{
    background-color: #427ed5;
    padding: 0.7rem 2rem;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
  }
}
</style>
