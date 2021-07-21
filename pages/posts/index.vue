<template>
  <div class="posts-page container p-4 bg-gray-100">
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
