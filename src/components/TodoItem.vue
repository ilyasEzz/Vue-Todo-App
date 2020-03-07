<template>
  <div>
    <div v-if="editMode">
      <form @submit.prevent="edit">
        <input type="text" v-model="todo.title" name="title" placeholder="Add Todo..." />
        <button type="submit" class="btn-floating btn waves-effect waves-light blue">
          <i class="material-icons">edit</i>
        </button>
      </form>
    </div>
    <div v-else class="row">
      <label class="col l9 m7 s7">
        <input type="checkbox" @change="markComplete" />
        <span :class="{'is-completed':todo.completed}">{{todo.text}}</span>
      </label>
      <div class="col l3 m5 s5">
        <button class="btn-floating btn waves-effect waves-light blue" @click="edit">
          <i class="material-icons">edit</i>
        </button>
        <button
          class="btn-floating btn waves-effect waves-light red right"
          @click="$emit('del-todo', todo.id)"
        >
          <i class="material-icons">delete</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      editMode: false
    };
  },
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    edit() {
      this.editMode = !this.editMode;
    }
  }
};
</script>

<style >
</style>