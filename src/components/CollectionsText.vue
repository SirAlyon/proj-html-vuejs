<template>
  <div class="text" :class="c_class">
    <h3>{{ title }}</h3>
    <div class="fw-bold">{{ des }}</div>
    <span class="collection_btn">VIEW MORE</span>
  </div>
</template>

<script>
export default {
  name: "CollectionText",
  props: {
    title: String,
    des: String,
    c_class: String
  },
};
</script>

<style lang="scss" scoped>
.text {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 20%;
  width: 100%;
  color: white;
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
      cursor: pointer;
    }
  }
}

//COMPONENTS UTILITY


.custom_position_1 {
  position: absolute;
  transform: translateX(-50%);
  left: 52% !important;
  top: 25% !important;
  text-align: start!important;
  padding: 0 2rem;
}
</style>
