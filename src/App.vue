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
      <Fueatured />
      <div class="collections">
        <div class="col-4">
          <div class="collection">
            <img src="@/assets/img/winter_collection_bg.jpg" alt="" />
            <div class="text">
              <h3>Winter Collection</h3>
              <div class="fs-4">STYLISH AND WARM</div>
              <span class="collection_btn">VIEW MORE</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="collection">
            <img src="@/assets/img/spring_collection_bg.jpg" alt="" />
            <div class="text">
              <h3>Winter Collection</h3>
              <div class="fs-4">STYLISH AND WARM</div>
              <span class="collection_btn">VIEW MORE</span>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="collection">
            <img src="@/assets/img/autumn_collection_bg.jpg" alt="" />
            <div class="text">
              <h3>Winter Collection</h3>
              <div class="fs-4">STYLISH AND WARM</div>
              <span class="collection_btn">VIEW MORE</span>
            </div>
          </div>
        </div>
      </div>
      <div class="best_seller">
        <div class="container">
          <div class="title">
            <hr />
            <span>Best Seller</span>
            <hr />
          </div>
          <div>Must have products from out top sellers</div>
          <div class="slider">
            <div class="col-3">
              <img
                src="@/assets/img/little_slider/modern_love_tee-200x260.jpg"
                alt=""
              />
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/little_slider/modern_black_leather_suit-200x260.jpg"
                alt=""
              />
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/little_slider/hipster_black_top-200x260.jpg"
                alt=""
              />
            </div>
            <div class="col-3">
              <img
                src="@/assets/img/little_slider/blue_leather_jacket-200x260.jpg"
                alt=""
              />
            </div>

            <!-- <img src="@/assets/img/slider/black_leather_jacket-400x520.jpg" alt=""> -->
          </div>
        </div>
      </div>
      <div class="free_shipping">
        <div class="card">
          <img src="@/assets/img/promo_box_1_bg.jpg" alt="" />
          <div class="text">
            <div class="title fw-bold fs-2">70% Off</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              similique!
            </p>
            <span class="collection_btn">VIEW MORE</span>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/img/promo_box_2_bg.jpg" alt="" />
          <div class="text">
            <div class="title fw-bold fs-2">70% Off</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              similique!
            </p>
            <span class="collection_btn">VIEW MORE</span>
          </div>
        </div>
      </div>
      <div class="new_arrivals">
        <div class="title">
          <hr />
          <span>Best Seller</span>
          <hr />
        </div>
        <div>Brand new products from top designers</div>
        <div class="slider">
          <div class="col-3">
            <img
              src="@/assets/img/slider/black_leather_jacket-400x520.jpg"
              alt=""
            />
          </div>
          <div class="col-3">
            <img
              src="@/assets/img/slider/blue_leather_jacket-400x520.jpg"
              alt=""
            />
          </div>
          <div class="col-3">
            <img
              src="@/assets/img/slider/hipster_black_top-400x520.jpg"
              alt=""
            />
          </div>
          <div class="col-3">
            <img
              src="@/assets/img/slider/modern_black_leather_suit-400x520.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="testimonial">
        <div class="main_bg">
          <div class="content">
            <img src="@/assets/img/man_testimonial.png" alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              minus iure ratione obcaecati tempore mollitia facilis quos
              provident quasi. Tenetur totam similique delectus nulla provident!
              Tenetur maiores quisquam quibusdam obcaecati.
            </p>
            <span>
              <strong>Dario Pineda</strong>
              , Theme Fusion
            </span>
          </div>
        </div>
      </div>
      <div class="our_blog">
        <div class="container">
          <div class="title">
            <hr />
            <span>From Our Blog</span>
            <hr />
          </div>
          <div>The latest Classic Shop news</div>
          <div class="articles">
            <div class="row">
              <div class="col-4">
                <div class="article">
                  <img src="@/assets/img/post_img_10-320x202.jpg" alt="" />
                  <div class="content">
                    <strong>Lorem ipsum dolor sit amet consectetur.</strong>
                    <span class="date">Semptember 9th, 2015 | 0 comments</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aspernatur fuga nulla voluptatibus totam enim dicta amet
                      cupiditate, voluptas at explicabo.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="article">
                  <img src="@/assets/img/post_img_11-320x202.jpg" alt="" />
                  <div class="content">
                    <strong>Lorem ipsum dolor sit amet consectetur.</strong>
                    <span class="date">Semptember 9th, 2015 | 0 comments</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aspernatur fuga nulla voluptatibus totam enim dicta amet
                      cupiditate, voluptas at explicabo.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="article">
                  <img src="@/assets/img/post_img_12-320x202.jpg" alt="" />
                  <div class="content">
                    <strong>Lorem ipsum dolor sit amet consectetur.</strong>
                    <span class="date">Semptember 9th, 2015 | 0 comments</span>
                    <span
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aspernatur fuga nulla voluptatibus totam enim dicta amet
                      cupiditate, voluptas at explicabo.</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <strong>QUI LA SEZIONE MANCANTE</strong>
        </div>
      </div>
      <div class="brands">
        <div class="container">
          <div class="title">BRAND LOGOS</div>
          <div class="brand_list">
            <img src="@/assets/img/brands/b_logotype_1.png" alt="" />
            <img src="@/assets/img/brands/b_logotype_2.png" alt="" />
            <img src="@/assets/img/brands/b_logotype_3.png" alt="" />
            <img src="@/assets/img/brands/b_logotype_6.png" alt="" />
            <img src="@/assets/img/brands/b_logotype_7.png" alt="" />
          </div>
        </div>
      </div>
      <div class="subscribe">
        <div class="container">
          <div class="text">
            <div class="icon">
              <font-awesome-icon icon="fa-solid fa-envelope" />
            </div>
            <h2>Subscribe now and get special offers</h2>
          </div>
          <div class="form">
            <input type="text" placeholder="Insert your email" />
            <span class="shop_now">SEND</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Fueatured from "@/components/FeaturedComponents.vue";
export default {
  name: "App",
  components: {
    Fueatured,
  },
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

//Collections
.collections {
  display: flex;
  color: white;
  .collection {
    aspect-ratio: 1 / 1;
    position: relative;
    img {
      width: 100%;
      max-height: 100%;
      object-position: top;
      object-fit: cover;
    }
    .text {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 20%;
      h3 {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      .collection_btn {
        display: inline-block;
        border: 3px solid white;
        padding: 0.7rem 2rem;
        border-radius: 2rem;
        margin-top: 1rem;
        transition: linear 0.4s;
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
          color: black;
          font-weight: bold;
        }
      }
    }
  }
}
//Best Seller
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
  .slider {
    display: flex;
    padding: 4rem 0;
  }
  img {
    height: 300px;
  }
}
//Free Shipping
.free_shipping {
  padding: 4rem 0;
  background-image: url("@/assets/img/bkgd_confetti-compressor.jpg");
  background-repeat: repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    position: relative;
    margin: 0 0.5rem;
  }
  img {
    width: 500px;
  }
  .text {
    width: 50%;
    text-align: start;
    color: white;
    position: absolute;
    left: 35%;
    top: 25%;
    transform: translateX(-50%);
  }
  .collection_btn {
    display: inline-block;
    border: 3px solid white;
    padding: 0.7rem 2rem;
    border-radius: 2rem;
    margin-top: 1rem;
    transition: linear 0.4s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
      color: black;
    }
  }
}
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
  .slider {
    display: flex;
    padding: 4rem 0;
  }
}
//Testimonial
.testimonial {
  width: 100%;
  height: 650px;
  background-image: url("@/assets/img/testimonials_home_1_bg.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  background-position: bottom center;
  display: flex;
  align-items: flex-end;
  color: white;
  .main_bg {
    width: 100%;
    height: 70%;
    background-image: url("@/assets/img/testimonials_home_1_bg.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .content {
    margin-top: -2rem;
    p {
      padding: 0 25%;
      margin: 2rem 0;
    }
  }
}
//Our Blog
.our_blog {
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
  .articles {
    display: flex;
    padding: 3rem 0;
    img {
      width: 100%;
    }
    .content {
      display: flex;
      flex-direction: column;
      text-align: start;
      margin-top: 1rem;
      color: gray;
      strong {
        color: black;
      }
      .date {
        font-size: 0.8rem;
        margin: 0.4rem 0 1rem 0;
      }
    }
  }
}
//Brands
.brands {
  background-color: rgba(211, 211, 211, 0.6);
  padding: 3rem;
  text-align: center;
  color: rgb(93, 93, 93);
  .brand_list {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
//Subscribe
.subscribe {
  background-color: rgba(48, 51, 55, 1);
  color: white;
  padding: 5rem 0;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text{
    display: flex;
  }
  h2 {
    font-size: 2.2rem;
    font-weight: bold;
  }
  .shop_now {
    background-color: #427ed5;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
  }
  input {
    margin-right: 0.5rem;
    border-radius: 1rem;
    padding: 0.3rem;
  }
  .icon {
    color: gray;
    font-size: 1.5rem;
    background-color: rgba(43, 46, 50, 1);
    border-radius: 50%;
    width: 50px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
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
