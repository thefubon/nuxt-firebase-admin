<template>
  <div class="container p-4 bg-gray-100">
    <h1 class="text-2xl font-bold">ID: {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id)
  }

}
</script>
