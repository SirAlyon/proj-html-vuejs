<template>
  <div class="socials">
    <font-awesome-icon icon="fa-brands fa-facebook-f" />
    <font-awesome-icon icon="fa-brands fa-twitter" />
    <font-awesome-icon icon="fa-brands fa-instagram" />
    <font-awesome-icon icon="fa-brands fa-youtube" />
  </div>
</template>

<script>

export default {
    name: 'SocialsComponent'
}
</script>

<style lang="scss" scoped>
  .socials > * {
    font-size: 1.2rem;
    margin-right: 1rem;
    &:hover{
        cursor: pointer;
        color: #427ed5;
    }
  }
</style>
