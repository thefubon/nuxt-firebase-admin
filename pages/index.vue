<template>
  <div class="home-page container p-4 bg-gray-100">
    <section class="intro mb-4">
      <h1 class="text-2xl font-bold">Get the latest tech news!</h1>
    </section>
    <PostList />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
export default {
  components: {
    PostList
  }
}
</script>
