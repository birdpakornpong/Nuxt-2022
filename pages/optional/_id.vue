<template>
  <article>
    <h1>{{ hello.title }}</h1>
    <nuxt-content :document="hello" />
  </article>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
    return {
      title: 'Page Optional',
    }
  },
  async asyncData({ $content }) {
    const hello = await $content('posts/hello').fetch()
    return {
      hello,
    }
  },
}
</script>
<style>
.nuxt-content h1 {
  /* style  ต้องไม่มี scope */
  /* my custom h1 style */
  color: red;
}
</style>