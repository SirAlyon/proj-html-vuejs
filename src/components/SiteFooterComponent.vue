<template>
  <footer>
    <div class="top_foot">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="contacts">
              <img src="@/assets/img/classic_shop_logo_footer.png" alt="" />
              <ul>
                <li>12345 North Main Street,</li>
                <li>New York, NY 5555</li>
                <li>Phone: +223 222348239</li>
                <li>Email: info@company.com</li>
                <li>web: theme-random.com</li>
              </ul>
              <div class="socials">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-youtube" />
              </div>
            </div>
          </div>
          <div class="col-3" v-for="(p, index) in prev" :key="index">
            <div class="top_rated">
              <h5>{{ p.name }} PRODUCTS</h5>
              <div
                class="prev_card mt-3"
                v-for="(product, index) in products"
                :key="index"
                v-show="p.ids.includes(product.id)"
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
                    <strong>${{ product.final_price }}</strong>
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
          <div class="col-3">
            <div class="recent_posts">
              <h5>RECENT POSTS</h5>
              <div
                class="prev_card p-3"
                v-for="(post, index) in 6"
                :key="index"
              >
                > Lorem ipsum dolor sit
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="tags">
              <h5>TAGS</h5>
              <ul>
                <li v-for="(tag, index) in randomTags" :key="index">
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bot_foot">
      <div class="links">
        <a href="#">Compyright 2012 - 2020</a> |
        <a href="#">Avada Theme by Theme Fusion</a> |
        <a href="#">All Right Reserved</a> |
        <a href="#">Powered by WordPress</a>
      </div>
      <img src="@/assets/img/payment_cards_footer.png" alt="" />
    </div>
  </footer>
</template>

<script>
import state from "@/state.js";
export default {
  name: "SiteFooterComponent",
  data() {
    return {
      prev: null,
      products: null,
      randomTags: [
        "block",
        "boots",
        "Brown",
        "Casual",
        "hat",
        "New York",
        "responsive",
        "Outdoors",
        "Summer",
        "Winter",
        "Spring",
        "Warm",
        "White",
        "Travel",
        "Red",
      ],
    };
  },
  mounted() {
    this.prev = state.previews.filter((preview) => {
      return preview.name === "TOP RATED";
    });

    this.products = state.products;

    console.log(this.prev);
  },
};
</script>

<style lang="scss" scoped>
footer {
  color: white;
  .top_foot {
    padding: 6rem 0;
    background-color: rgba(43, 46, 50, 1);
  }
  h5 {
    margin-bottom: 2rem;
    text-align: start;
  }
  ul {
    list-style: none;
    text-decoration: none;
    padding: 0;
    text-align: start;
  }
  .row,
  .container {
    height: 100%;
  }
  .contacts {
    height: 100%;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    img {
      width: 200px;
    }
    .socials > * {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
  }
  .top_rated {
    text-align: start;
  }
  .prev_card {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(188, 188, 188, 0.15);
    color: white;
  }
  .recent_posts {
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 0 1rem;
  }
  .tags {
    ul {
      display: flex;
      flex-flow: row wrap;
      li {
        padding: 0.2rem 0.5rem;
        border: 1px solid rgba(211, 211, 211, 0.15);
        border-radius: 0.2rem;
        margin: 0.2rem;
      }
    }
  }
  .stars {
    color: #427ed5;
  }
  .bot_foot {
    background-color: rgba(29, 31, 34, 1);
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 300px;
        margin-top: 0.5rem;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
