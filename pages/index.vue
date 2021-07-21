<template>
  <div class="home-page container p-4 bg-gray-100">
    <section class="intro mb-4">
      <h1 class="text-2xl font-bold">Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
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
    }).then(data => {
      return data
    }).catch(e => {
      context.error(new Error())
    })
  },
  created() {

  }
}
</script>
