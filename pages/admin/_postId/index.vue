<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="LoadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data() {
    return {
      LoadedPost: {
        author: 'Lorem Ipsum',
        title: 'My awesome Post',
        content: 'Super amazing, thanks for that!',
        thumbnailLink: 'https://fubon.uk/Maintenance.jpg'
      }
    }
  }
}
</script>
