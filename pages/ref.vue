<template>
  <article>
    <h1 ref="title">Waiting</h1>
    <button @click="handleText">Click</button>
    <input ref="input" type="text" placeholder="Text Input" />
  </article>
</template>

<script>
export default {
  // Access แปลว่า เข้าถึง Access tto DOM element
  name: 'Ref',
  methods: {
    handleText() {
      this.$refs.title.textContent = 'Bird pakornpong'
      this.$refs.input.focus()
    },
  },
}
</script>