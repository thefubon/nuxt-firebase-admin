<template>
  <div class="single-post-page container p-4 bg-gray-100">
    <section class="post">
      <h1 class="post-title text-2xl fotn-bold">{{ loadedPosts.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last update on {{ loadedPosts.updatedDate | date }}</div>
        <div class="post-detail">Written by {{ loadedPosts.author }}</div>
      </div>
      <p class="post-content">{{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, optio dolores commodi neque nisi, eius, deleniti eos velit assumenda natus ea. Explicabo eligendi architecto voluptatibus impedit eveniet harum blanditiis voluptatem.</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
          id: '1',
          title: "First Post (ID: " + context.route.params.id + ")",
          previewText: "This my first post!",
          author: "Anton Fubon",
          updatedDate: new Date(),
          content: "Some dummy text which is definitely not the preview text though!",
          thumbnail: "https://fubon.uk/Maintenance.jpg"
        }
      })
    }, 500)
  },
}
</script>
