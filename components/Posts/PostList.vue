<template>
  <section class="post-list grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://fubon.uk/Maintenance.jpg"
      title="Hello there!"
      previewText="This my first post!"
    />

    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://fubon.uk/Maintenance.jpg"
      title="Hello there - the second time!"
      previewText="This my second post!"
    />

      <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://fubon.uk/Maintenance.jpg"
      title="Hi!"
      previewText="This my third post!"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .post-thumbnail {
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
