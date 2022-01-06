<template>
  <div class="container">
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input @change="toggle(todo)" type="checkbox" :checked="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="remove(todo)">Delete</button>
      </li>
      <li>
        <!-- @keyup.enter ทำงาน function เมื่อ enter -->
        <input
          @keyup.enter="addTodo"
          type="text"
          placeholder="What needs to be done?"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove',
    }),
    addTodo(e) {
      // e,target,value สามารถแทน value ของ input element ได้เลย
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
  },
}
</script>
<style scoped>
.container {
  padding: 1em;
  margin: 0 auto;
  width: 1220px;
}
.done {
  color: green;
}
</style>