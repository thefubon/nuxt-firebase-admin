<template>
  <div class="home-page container">
    <div class="flex sticky top-0 bg-white shadow-md z-10">
      <scrollactive class="container flex justify-center items-center h-12 text-blue-green-1200 uppercase font-medium text-sm leading-6 space-x-14" active-class="scrollactive" :modifyUrl="false" :offset="45" :duration="800" bezier-easing-value=".5,0,.35,1">
        <a class="scrollactive-item" href="#scrollId">Scroll menu</a>
      </scrollactive>

      <div class="animate-left">Fubon</div>
      <div class="animate-right">Design</div>

    </div>

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
</style>
