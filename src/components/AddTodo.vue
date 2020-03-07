<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo..." />
      <input type="submit" value="Add" class="btn blue" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: ["todos"],
  data() {
    return {
      title: "",
      todosCounter: 0
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (this.title !== "") {
        const newTodo = {
          id: this.todos.length,
          text: this.title,
          completed: false,
          date: new Date()
        };

        this.$emit("add-todo", newTodo);
        this.todosCounter++;
        this.title = "";
      }
    }
  }
};
</script>

<style>
</style>