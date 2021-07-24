<template>
  <div class="relative">
    <VueSlickCarousel class="flex" v-bind="slickOptions" ref="carousel">
      <div class="relative" v-for="slide in slides" :key="slide.id">
        <img class="w-full h-full" :src="slide.img" :alt="slide.alt">
        <div class="absolute left-0 bottom-0 p-6 bg-black bg-opacity-50 text-white w-full">
          <h1 class="text-lg md:text-4xl font-bold" v-text="slide.title"></h1>
          <p class="text-sm md:text-base" v-text="slide.description"></p>
        </div>
      </div>
      <template #customPaging>
        <span></span>
      </template>
    </VueSlickCarousel>
    <div class="absolute left-6 inset-y-0 z-10 flex items-center">
      <button class="relative -top-11" @click="showPrev">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
      </button>
    </div>
    <div class="absolute right-6 inset-y-0 z-10 flex items-center">
      <button class="relative -top-11" @click="showNext">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slides: [
          {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            img: 'https://picsum.photos/960/540.jpg', // require('/assets/img/images.jpg'),
            alt: 'Alt',
          },
          {
            id: 2,
            title: 'Title 2',
            description: 'Description 2',
            img: 'https://picsum.photos/960/540.jpg', // require('/assets/img/images.jpg'),
            alt: 'Alt 2',
          },
          {
            id: 3,
            title: 'Title 3',
            description: 'Description 3',
            img: 'https://picsum.photos/960/540.jpg', // require('/assets/img/images.jpg'),
            alt: 'Alt 3',
          },
          {
            id: 4,
            title: 'Title 4',
            description: 'Description 4',
            img: 'https://picsum.photos/960/540.jpg', // require('/assets/img/images.jpg'),
            alt: 'Alt 4',
          },
          {
            id: 5,
            title: 'Title 5',
            description: 'Description 5',
            img: 'https://picsum.photos/960/540.jpg', // require('/assets/img/images.jpg'),
            alt: 'Alt 5',
          },
        ],
        slickOptions: {
          dots: true,
          dotsClass: 'slick-dots flex justify-center space-x-2 text-center absolute bottom-2 md:bottom-4 inset-x-0',
          arrows: false,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 10000,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    },
    methods: {
      showPrev() {
        this.$refs.carousel.prev()
      },
      showNext() {
        this.$refs.carousel.next()
      },
    },
  }
</script>

<style>
  /* Dots */
  .slick-dots li {
    @apply inline-block w-4 h-4 rounded-full bg-black bg-opacity-30 cursor-pointer relative -bottom-12;
  }
  .slick-dots > li.slick-active {
    @apply bg-black;
  }
</style>
