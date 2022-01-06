export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text, done: false
        })
    },
    toggle(state, todo) {
        todo.done = !todo.done
    },
    remove(state, todo) {
        const index = state.list.indexOf(todo)
        state.list.splice(index, 1)
    }
}