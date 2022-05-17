<template>
  <div class="our_blog">
    <div class="container">
      <div class="title">
        <hr />
        <span>From Our Blog</span>
        <hr />
      </div>
      <div class="fs-5 mt-3">The latest Classic Shop news</div>
      <div class="articles">
        <div class="row">
          <div class="col-4" v-for="(article, index) in articles" :key="index">
            <div class="article">
              <img :src="require('@/assets/img/' + article.src)" alt="" />
              <div class="content">
                <strong>{{ article.title }}</strong>
                <div class="date">
                  {{ article.date }} | {{ article.comments }} comments
                </div>
                <span>{{ article.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import state from "@/state.js";
export default {
  name: "ArticlesComponent",
  data() {
    return {
      articles: null,
    };
  },
  mounted() {
    this.articles = state.articles;
  },
};
</script>

<style lang="scss" scoped>
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
}
.articles {
  display: flex;
  padding: 3rem 0;
  img {
    width: 100%;
    transition: linear 0.2s;
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
  .article:hover img{
      opacity: 0.8;
      transform: scale(1.05);
  }
  .article:hover{
      cursor: pointer;
      box-shadow: 0 0 5px lightgrey;
  }
}
</style>
