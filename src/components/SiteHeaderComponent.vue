<template>
  <header>
    <div class="top_head">
      <div class="container">
        <Socials />
        <div class="menu">
          <a href="#"> Shopping Cart </a>
          <a href="#">
            My Account
            <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2" />
          </a>
          <a href="#" class="cart">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="mx-2" />
            Cart
            <font-awesome-icon icon="fa-solid fa-angle-down" class="mx-2" />
          </a>
        </div>
      </div>
    </div>
    <BotHeader 
    :menuItems="navBar.menuItems"
    :logo_src="navBar.logo_src"
    />
  </header>
</template>

<script>

import BotHeader from "@/components/BotHeaderComponent.vue";
import Socials from "@/components/SocialsComponent.vue";

export default {
  name: "SiteHeader",
  components:{
      BotHeader,
      Socials
  },
  data(){
      return {
          navBar: {
              logo_src: 'classic_shop_logo2x.png',
              menuItems: ['Home', 'Shop', 'Products', 'Categories', 'News', 'Elements']
          }
      }
  }
};
</script>

<style lang="scss" scoped>
/* Start Header CSS */
.top_head {
  border-bottom: 1px solid rgba(211, 211, 211, 0.5);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 1rem;
    border-right: 1px solid rgba(211, 211, 211, 0.5);
  }
  .menu {
    display: flex;
    align-items: center;
  }
  .cart {
    background-color: rgba(251, 251, 250, 1);
  }
}


</style>
