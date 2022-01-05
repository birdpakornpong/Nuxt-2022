<template>
  <article>
    <h1>{{ hello.title }}</h1>
    <nuxt-content :document="hello" />
    <div v-if="changePassword">
      <input type="text" v-model="password" ref="inputPassword" />
    </div>
    <div v-else><span @click="enableChangePassword">Click Here</span></div>
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
  data() {
    return {
      password: '',
      changePassword: false,
    }
  },
  methods: {
    enableChangePassword() {
      this.changePassword = true
      // ทำให้ focus เลย
      //  this.$nextTick ทำให้
      this.$nextTick(() => {
        this.$refs.inputPassword.focus()
      })
    },
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