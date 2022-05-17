<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>

import SiteFooter from "@/components/SiteFooterComponent.vue";
import SiteHeader from "@/components/SiteHeaderComponent.vue";
import SiteMain from "@/components/SiteMainComponent.vue";


export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
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
</style>
