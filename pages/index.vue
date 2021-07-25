<template>
  <div class="home-page container">
    <h2 class="py-6 text-2xl font-bold">horizontal Scroll Menu</h2>
    <div class="flex sticky top-0 bg-white z-10">
      <scrollactive class="container flex justify-center items-center h-12" active-class="scrollactive" :modifyUrl="false" :offset="60" :duration="800" bezier-easing-value=".5,0,.35,1">
        <div class="overflow-y-auto whitespace-nowrap scroll-hidden uppercase font-medium text-sm leading-6 space-x-6">
        <a class="scrollactive-item" href="#scrollId">Scroll menu</a>
        <a class="scrollactive-item" href="#">News</a>
        <a class="scrollactive-item" href="#">Articles</a>
        <a class="scrollactive-item" href="#">Videos</a>
        <a class="scrollactive-item" href="#">Tricks</a>
        <a class="scrollactive-item" href="#">PHP</a>
        <a class="scrollactive-item" href="#">Laravel</a>
        <a class="scrollactive-item" href="#">Vue</a>
        <a class="scrollactive-item" href="#">React</a>
        <a class="scrollactive-item" href="#">Tailwindcss</a>
        <a class="scrollactive-item" href="#">Meraki UI</a>
        <a class="scrollactive-item" href="#">CPP</a>
        <a class="scrollactive-item" href="#">JavaScript</a>
        <a class="scrollactive-item" href="#">Ruby</a>
        <a class="scrollactive-item" href="#">Mysql</a>
        <a class="scrollactive-item" href="#">Pest</a>
        <a class="scrollactive-item" href="#">PHPUnit</a>
        <a class="scrollactive-item" href="#">Netlify</a>
        <a class="scrollactive-item" href="#">VS Code</a>
        <a class="scrollactive-item" href="#">PHPStorm</a>
        <a class="scrollactive-item" href="#">Sublime</a>
        </div>
      </scrollactive>
    </div>

    <h2 class="py-6 text-2xl font-bold">Vue Slick Carousel</h2>
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
