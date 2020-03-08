<template >
  <div class="col m6 s12 p-0" v-if="show">
    <div class="card" v-bind:style="{borderLeft: '1rem solid '+ color}">
      <div class="card-content">
        <!-- Edit Todo Name -->
        <div v-if="edit">
          <form @submit.prevent="edit = false">
            <input type="text" v-model="name" name="title" placeholder="Edit Todo..." />
            <button type="submit" class="btn-floating btn waves-effect waves-light blue">
              <i class="material-icons">edit</i>
            </button>
          </form>
        </div>
        <div v-else>
          <!-- Name and Date -->
          <blockquote class>{{ date | natural-time }}</blockquote>
          <span @click="edit = true" class="card-title title-util center-align">{{name}}</span>
        </div>
        <!-- AddTodo and TodoItems   -->
        <AddTodo v-bind:todos="todos" v-on:add-todo="addTodo" />
        <div>
          <div v-bind:key="todo.id" v-for="todo in filteredTodos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="deleteTodo" />
          </div>
        </div>
        <!-- Actions -->
        <Actions
          :search="search"
          v-on:searching="searching"
          v-on:del="show = false"
          v-on:color-updated="updateColor"
          v-on:sorting="sorting"
        />
      </div>
    </div>.
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import Actions from "./Actions.vue";

export default {
  name: "Todos",
  components: {
    TodoItem,
    AddTodo,
    Actions
  },

  data() {
    return {
      edit: true,
      show: true,
      date: "",
      name: "New Todo",
      color: "#2196F3",
      todos: [],
      search: ""
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(item) {
      this.todos = [...this.todos, item];
    },
    updateColor(newColor) {
      this.color = newColor;
    },
    searching(currentSearch) {
      this.search = currentSearch;
    },
    // Comparaison Methods
    compareByText(a, b) {
      if (a.text < b.text) return -1;
      if (a.text > b.text) return 1;
      return 0;
    },
    compareByCompletion(a, b) {
      if (a.completed === false && b.completed === true) return 1;
      if (a.completed === true && b.completed === false) return -1;
      return 0;
    },
    compareByDate(a, b) {
      if (a.date.getTime() < b.date.getTime()) return -1;
      if (a.date.getTime() > b.date.getTime()) return 1;
      return 0;
    },
    sorting(sortBy) {
      if (sortBy === "text") this.todos.sort(this.compareByText);
      else if (sortBy === "date") this.todos.sort(this.compareByDate);
      else if (sortBy === "completion") {
        this.todos.sort(this.compareByCompletion);
      }
    }
  },

  created() {
    this.date = new Date();
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(todo => {
        return todo.text.match(this.search);
      });
    }
  },
  watch: {
    todos: {
      handler() {
        let todosCard = {
          id: this.date.getTime(),
          todos: this.todos
        };
        this.$emit("todos-updated", todosCard);
      },
      deep: true
    }
  }
};
</script>

<style >
@import "../assets/css/Todos.css";
</style>