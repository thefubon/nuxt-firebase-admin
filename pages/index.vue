<template>
  <div class="home-page container">
    <h2 class="pb-4 text-2xl font-bold">Horizontal Scroll Menu</h2>
    <div class="flex sticky top-0 bg-white">
      <scrollactive class="container flex justify-center items-center h-12 px-4" active-class="scrollactive" :modifyUrl="false" :offset="60" :duration="800" bezier-easing-value=".5,0,.35,1">
        <div class="overflow-y-auto whitespace-nowrap scroll-hidden uppercase font-medium text-sm leading-6 space-x-6">
        <a class="scrollactive-item" href="#scrollId">Scroll menu</a>
        <a class="scrollactive-item" href="#scrollId">News</a>
        <a class="scrollactive-item" href="#scrollId">Articles</a>
        <a class="scrollactive-item" href="#scrollId">Videos</a>
        <a class="scrollactive-item" href="#scrollId">Tricks</a>
        <a class="scrollactive-item" href="#scrollId">PHP</a>
        <a class="scrollactive-item" href="#scrollId">Laravel</a>
        <a class="scrollactive-item" href="#scrollId">Vue</a>
        <a class="scrollactive-item" href="#scrollId">React</a>
        <a class="scrollactive-item" href="#scrollId">Tailwindcss</a>
        </div>
      </scrollactive>
    </div>

    <h2 class="mt-10 pb-4 text-2xl font-bold">Vue Slick Carousel</h2>
    <TheSlider />

    <div class="h-[2000px]"></div>
    <div id="scrollId">Scroll ID</div>
    <div class="h-[3000px]"></div>
  </div>
</template>

<style scoped>
  .scrollactive {
    @apply border-b-2 border-indigo-600 mt-0.5;
  }
  .scroll-hidden::-webkit-scrollbar {
    height: 0px;
    background: transparent; /* make scrollbar transparent */
  }
</style>
