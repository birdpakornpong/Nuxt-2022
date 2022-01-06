<template>
  <div class="container">
    <h1>Photo</h1>
    <div class="photo">
      <nuxt-link v-for="photo in photoAll" :key="photo.id" to="/">
        <img :src="photo.download_url" alt="" class="photo-item" />
        {{ photo.author }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Bird Fetch API',
    }
  },
  async asyncData({ $axios }) {
    const photoAll = await $axios.$get('https://picsum.photos/v2/list?limit=12')
    return { photoAll }
  },
}
</script>
<style>
.container {
  padding: 1em;
  width: 1220px;
  margin: 0 auto;
}
.photo-item {
  height: 200px;
  object-fit: cover;
}
.photo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  text-align: center;
  /* grid-template-rows: auto; */
}
</style>