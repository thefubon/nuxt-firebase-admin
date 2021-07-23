<template>
  <div class="relative z-20 mt-[3px] text-blue-green-1200 text-sm">
    <button class="font-semibold inline-flex items-center focus:outline-none w-[75px]" v-on-clickaway="away" @click="isOpen = !isOpen" @keydown.escape="isOpen = false">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
      <span class="mr-2 ml-1">{{ $t('zone') }}</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    <ul class="absolute right-0 text-gray-500 p-4 bg-white shadow-md rounded space-y-2 font-medium" v-if="isOpen" @click="isOpen = false" v-cloak transform-gpu>
      <li><NuxtLink class="" active-class="active" :to="switchLocalePath('ru')" v-text="$t('lang_ru')" exact></NuxtLink></li>
      <li><NuxtLink class="" active-class="active" :to="switchLocalePath('en')" v-text="$t('lang_en')"></NuxtLink></li>
    </ul>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  mixins: [ clickaway ],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    away () {
      this.isOpen = false
    }
  },
}
</script>

<style scoped>
  .active {
    @apply text-indigo-600;
  }
</style>
