<template>
  <article>
    <h1>Hello</h1>
    <p>Site: {{ site.site }}</p>
  </article>
</template>

<script>
export default {
  layout: 'dashboard',
  head() {
    return {
      title: 'Head Web Bird',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  validate({ params }) {
    // Must be a Number
    return /^\d+$/.test(params.id)
    // ถ้า params ไม่ใช่ number to 404
  },
  async asyncData({ $content }) {
    // การ fetch content file .yml เราสามารถใช้ไฟล์ YAML
    const site = await $content('site').fetch()

    return {
      site,
    }
  },
}
</script>
