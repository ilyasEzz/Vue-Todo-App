<template >
  <div class="col m6 s12" v-if="show">
    <div class="card" v-bind:style="{borderLeft: '1rem solid '+ color}">
      <div class="card-content">
        <div v-if="edit">
          <form @submit.prevent="edit = false">
            <input type="text" v-model="name" name="title" placeholder="Add Todo..." />
            <button type="submit" class="btn-floating btn waves-effect waves-light blue">
              <i class="material-icons">edit</i>
            </button>
          </form>
        </div>
        <div v-else>
          <blockquote class>{{ date }}</blockquote>

          <span @click="edit = true" class="card-title title-util center-align">{{name}}</span>
        </div>

        <AddTodo v-bind:todos="todos" v-on:add-todo="addTodo" />
        <div>
          <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo" />
          </div>
        </div>
        <div class="actions">
          <button class="btn-floating btn waves-effect waves-light red mx-2" @click="show = false">
            <i class="material-icons">delete</i>
          </button>
          <button class="btn-floating btn waves-effect waves-light red mx-2" @click="show = false">
            <i class="material-icons">palette</i>
          </button>
          <button class="btn-floating btn waves-effect waves-light red mx-2" @click="show = false">
            <i class="material-icons">sort</i>
          </button>
          <button class="btn-floating btn waves-effect waves-light red mx-2" @click="show = false">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>.
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem,
    AddTodo
  },
  created() {
    let now = new Date();
    now = `${now.getHours()}:${now.getMinutes()}`;
    this.date = now;
  },
  data() {
    return {
      edit: true,
      show: true,
      date: "",
      name: "New Todo",
      color: "#2196F3",
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(item) {
      this.todos = [...this.todos, item];
    }
  }
};
</script>

<style scoped>
blockquote {
  display: inline;
  padding-right: 10px;
  background-color: #f4f4f4;
  margin-right: 1rem;
}
.date {
  color: white;
  background-color: dodgerblue;
  display: inline-block;
  padding: 10px;
  border-radius: 50%;
}

.title-util {
  display: inline !important;
  cursor: pointer;
}
</style>