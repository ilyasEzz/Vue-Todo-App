<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo..." />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: ["todos"],
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: this.todos.length,
        title: this.title,
        completed: false
      };

      this.$emit("add-todo", newTodo);
    }
  }
};
</script>

<style>
</style>