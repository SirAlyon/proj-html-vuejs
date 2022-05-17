<template>
  <div class="bot_head">
    <div class="container">
      <div class="logo">
        <img :src="require('@/assets/img/' + logo_src)" alt="" />
      </div>
      <div class="menu">
        <a
          href="#"
          v-for="(item, index) in menuItems"
          :key="index"
          @click="activeLink($event)"
          class="menu_links"
        >
          {{ item }}

          <font-awesome-icon
            icon="fa-solid fa-angle-down"
            class="custom-fs mx-2"
          />
        </a>
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
  methods: {
    activeLink(event) {
        const links = document.querySelectorAll('.menu_links')
        links.forEach(link =>{
            if (link.className.includes('active')){
                link.classList.remove('active')
            }
        })
      console.log(event);
      event.target.classList.add('active')
    },
  },
};
</script>

<style lang="scss" scoped>
.bot_head {
  display: flex;
  padding: 0rem 0;
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
    height: 100% !important;
    margin-right: 1rem;
    margin-left: 1rem;
    display: flex;
    align-items: center;
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
  a:hover {
    color: #427ed5;
  }
  .custom-fs {
    font-size: 0.8rem;
  }
  .menu_links{
      border-top: 4px solid transparent;
      padding: 2.5rem 0;
  }
  .active {
    border-top: 4px solid #427ed5;
  }
}
</style>
