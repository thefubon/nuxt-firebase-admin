<template>
  <NuxtLink :to="postLink" class="post-preview">
    <article class="">
      <div
        class="post-thumbnail rounded border"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}">
      </div>
      <div class="post-content mt-4">
        <h1 class="text-lg font-bold">{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>
