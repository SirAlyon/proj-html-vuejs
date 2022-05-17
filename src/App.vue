<template>
  <div id="app">
    <SiteHeader />
    <!-- Start Main Section -->
    <main>
      <div class="jumbotron">
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
            <CollectionsText
              :title="'Winter Collection'"
              :des="'STYLISH AND WARM'"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="collection">
            <img src="@/assets/img/spring_collection_bg.jpg" alt="" />
            <CollectionsText
              :title="'Spring Collection'"
              :des="'BRIGHT AND COLORFUL'"
            />
          </div>
        </div>
        <div class="col-4">
          <div class="collection">
            <img src="@/assets/img/autumn_collection_bg.jpg" alt="" />
            <CollectionsText
              :title="'Autumn Collection'"
              :des="'RIGHT AND COMFORTABLE'"
            />
          </div>
        </div>
      </div>
      <BestSeller />
      <div class="free_shipping">
        <div class="card">
          <img src="@/assets/img/promo_box_1_bg.jpg" alt="" />
          <CollectionsText
            :title="'70% Off'"
            :des="lorem()"
            :c_class="'custom_position_1'"
          />
        </div>
        <div class="card">
          <img src="@/assets/img/promo_box_2_bg.jpg" alt="" />
          <CollectionsText
            :title="'Free Shipping'"
            :des="lorem()"
            :c_class="'custom_position_1'"
          />
        </div>
      </div>
      <NewArrivals />
      <Testimonials />
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
        </div>
      </div>
      <ReviewProducts />
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
    <SiteFooter />
  </div>
</template>

<script>
import Fueatured from "@/components/FeaturedComponent.vue";
import BestSeller from "@/components/BestSellerComponent.vue";
import NewArrivals from "@/components/NewArrivalsComponent.vue";
import Testimonials from "@/components/TestimonialsComponent.vue";
import ReviewProducts from "@/components/ReviewProductsComponent.vue";
import SiteFooter from "@/components/SiteFooterComponent.vue";
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import CollectionsText from "@/components/CollectionsText.vue";

export default {
  name: "App",
  components: {
    Fueatured,
    BestSeller,
    NewArrivals,
    Testimonials,
    ReviewProducts,
    SiteFooter,
    SiteHeader,
    CollectionsText,
  },
  methods: {
    lorem() {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              similique!`;
    },
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
hr {
  opacity: 0.1;
}
/* Start Main CSS */
//Jumbotron
.jumbotron {
  height: 1000px;
  background-image: url("@/assets/img/home1_slide_three_bg_2.jpg");
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
}

//Our Blog
.our_blog {
  padding: 5rem 0;
  border-bottom: 1px solid rgba(211, 211, 211, 0.562);
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
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text {
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
</style>
