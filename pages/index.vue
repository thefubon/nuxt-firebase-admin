<template>
  <div class="home-page container">
    <h2 class="py-6 text-2xl font-bold">horizontal Scroll Menu</h2>
    <div class="flex sticky top-0 bg-white z-10">
      <scrollactive class="container flex justify-center items-center h-12" active-class="scrollactive" :modifyUrl="false" :offset="60" :duration="800" bezier-easing-value=".5,0,.35,1">
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
        <a class="scrollactive-item" href="#scrollId">Meraki UI</a>
        <a class="scrollactive-item" href="#scrollId">CPP</a>
        <a class="scrollactive-item" href="#scrollId">JavaScript</a>
        <a class="scrollactive-item" href="#scrollId">Ruby</a>
        <a class="scrollactive-item" href="#scrollId">Mysql</a>
        <a class="scrollactive-item" href="#scrollId">Pest</a>
        <a class="scrollactive-item" href="#scrollId">PHPUnit</a>
        <a class="scrollactive-item" href="#scrollId">Netlify</a>
        <a class="scrollactive-item" href="#scrollId">VS Code</a>
        <a class="scrollactive-item" href="#scrollId">PHPStorm</a>
        <a class="scrollactive-item" href="#scrollId">Sublime</a>
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
