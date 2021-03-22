<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="눈내린 한라산"
        text="한라산에 눈내린 풍경"
        :img-src="require('../static/v01.jpg')"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      caption="성산일출봉"
        text="멀리서 바라보는 성산일출봉"
      :img-src="require('../static/v02.jpg')">
      </b-carousel-slide>

      <b-carousel-slide
      caption="눈내린 한라산"
     :img-src="require('../static/v05.jpg')">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :img-src="require('../static/v03.jpg')"></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide :img-src="require('../static/v04.jpg')">
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>