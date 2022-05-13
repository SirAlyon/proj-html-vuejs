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
      <div class="featured">
        <div class="container">
          <div class="title">
            <hr />
            <span>Featured Products</span>
            <hr />
          </div>
          <div>Must have products from out top sellers</div>
          <div class="gender">
            <span>MEN</span>
            <span>WOMEN</span>
            <span>ACCESSORIES</span>
          </div>
          <div class="featured_card">
            <div class="col-3">
              <div class="product">
                <img
                  src="@/assets/img/black_elegant_leather_jacket.jpg"
                  alt=""
                />
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
                <img
                  src="@/assets/img/black_elegant_leather_jacket.jpg"
                  alt=""
                />
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
                <img
                  src="@/assets/img/black_elegant_leather_jacket.jpg"
                  alt=""
                />
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
                <img
                  src="@/assets/img/black_elegant_leather_jacket.jpg"
                  alt=""
                />
                <div class="name">Black Leather Jacket</div>
                <div class="info">Men, Jackets, Jeans</div>
                <div class="price">
                  <span class="discounted_price">$235</span>
                  <span>$200</span>
                </div>
              </div>
            </div>
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
  color: #000000;
}
img {
  max-width: 100%;
}
/* Start Main CSS */
//Jumbotron
.jumbotron {
  height: 900px;
  background-image: url("@/assets/img/home1_slide_one_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .jumbo_text {
    width: 100%;
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
  }
  .featured_card {
    display: flex;
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
