<template>
  <div class="posts-page container p-4 bg-gray-100">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'First Post',
            previewText: 'This my first post!',
            thumbnail: 'https://fubon.uk/Maintenance.jpg',
          },
          {
            id: '2',
            title: 'Second Post',
            previewText: 'This my second post!',
            thumbnail: 'https://fubon.uk/Maintenance.jpg',
          }
        ]
      })
    }, 500)
  },
}
</script>
