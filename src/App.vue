<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="top_head">
          <div class="socials">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </div>
          <div class="menu">
            <a href="#"> Shopping Cart </a>
            <a href="#">
              My Account
              <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2" />
            </a>
            <a href="#">
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="mx-2"
              />
              Cart
              <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2" />
            </a>
          </div>
        </div>
        <div class="bot_head">
          <div class="logo">
            <img src="@/assets/img/classic_shop_logo2x.png" alt="" />
          </div>
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
            <span class="shop_now"> SHOP NOW! </span>
            <div class="search mx-3">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Start Main Section -->
    <main>
      <div class="jumbotron">
        <img src="@/assets/img/black_leather_jacket.png" alt="" />
        <div class="jumbo_text">
          <h1>Brand New Arrivals</h1>
          <span class="fs-1">NEW COLLECTION FROM NEW YORK</span>
          <div class="jumbo_btn">
            <span>VIEW ALL</span>
            <span>LOOKBOOK</span>
          </div>
        </div>
      </div>
    </main>
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
/* Start Main CSS */
.jumbotron {
  height: 900px;
  background-image: url("@/assets/img/home1_slide_one_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .jumbo_text {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    h1 {
      font-size: 7rem;
      font-weight: bold;
    }
    .jumbo_btn > * {
      display: inline-block;
      margin: 2rem 0.6rem;
      padding: 1rem 2rem;
      border: 3px solid white;
      border-radius: 2rem;
      font-weight: bold;
      background-color: rgba(255, 255, 255, 0.225);
      transition: linear 0.4s;
      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        color: black;
      }
    }
  }
  img {
    height: 1200px;
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
}

/* Start Header CSS */
.top_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  .socials > * {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  a {
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 1rem;
    border-right: 1px solid lightgray;
  }
  .menu {
    display: flex;
    align-items: center;
  }
}

.bot_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
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
}
</style>
