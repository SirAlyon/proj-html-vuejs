<template>
  <div class="testimonials">
    <div class="main_bg">
      <div class="content">
        <div
          class="testimonial"
          v-for="(tes, index) in testimonials"
          :key="index"
          v-show="tes.id === activeT"
        >
          <img :src="require('@/assets/img/' + tes.src)" alt="" />
          <p>{{ tes.text }}</p>
          <span>
            <strong>{{ tes.name }}</strong>
            {{ tes.details }}
          </span>
        </div>
        <div class="circles">
          <span
            @click="changeTestimonial($event)"
            class="active testimonial-"
            id="testimonial-1"
          ></span>
          <span
            @click="changeTestimonial($event)"
            class="testimonial-"
            id="testimonial-2"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialsComponent",
  data() {
    return {
      activeT: 1,
      testimonials: [
        {
          src: "woman_testimonial.png",
          name: "Galadriel Elf",
          text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minus
          iure ratione obcaecati tempore mollitia facilis quos provident quasi.
          Tenetur totam similique delectus nulla provident! Tenetur maiores
          quisquam quibusdam obcaecati.`,
          details: ", Elf Princess",
          id: 2,
        },
        {
          src: "man_testimonial.png",
          name: "Dario Pineda",
          text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minus
          iure ratione obcaecati tempore mollitia facilis quos provident quasi.
          Tenetur totam similique delectus nulla provident! Tenetur maiores
          quisquam quibusdam obcaecati.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minus
          iure ratione obcaecati tempore mollitia facilis quos provident quasi.
          Tenetur totam similique delectus nulla provident! Tenetur maiores
          quisquam quibusdam obcaecati.`,
          details: ", Theme Fusion",
          id: 1,
        },
      ],
    };
  },
  methods: {
    changeTestimonial(event) {
      const arrows = document.querySelectorAll(".testimonial-");
      console.log(arrows, event);
      arrows.forEach((arrow) => {
        arrow.classList.remove("active");
      });
      if (!event.target.className.includes("active")) {
        event.target.classList.add("active");
      }
      
      this.activeT = Number(event.target.id.slice(12, 13));
    },
  },
};
</script>


<style lang="scss" scoped>
//Testimonial
.testimonials {
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
    height: 100%;
    margin-top: -2rem;
    position: relative;
    p {
      padding: 0 25%;
      margin: 2rem 0;
    }
    .circles{
      position: absolute;
      bottom: 15%;
      transform: translateX(-50%);
      left:50%;
    }
  }
  .circles > span {
    display: inline-block;
    width: 12px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 1px solid white;
    margin: 2rem 0.5rem;
  }
  .active {
    background-color: white;
  }
}
</style>