<template>
  <div id="app">
    <AddTodo v-bind:todos="todos" v-on:add-todo="addTodo" />
    <Todos class="todo" v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <div ref="container">
      <button @click="onClick">Click to insert</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 0,
          title: "Todo One",
          completed: false
        },
        {
          id: 1,
          title: "Todo Two",
          completed: false
        },
        {
          id: 2,
          title: "Todo Three",
          completed: false
        }
      ]
    };
  },
  methods: {
    onClick() {
      var TodosClass = Vue.extend(Todos);
      var TodosInstance = new TodosClass({
        propsData: { todos: this.todos }
      });
      TodosInstance.$slots.default = ["Click me!"];

      TodosInstance.$mount();
      this.$refs.container.appendChild(TodosInstance.$el);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(item) {
      this.todos = [...this.todos, item];
    }
  }
};
</script>

<style>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  color: #fff;
  background-color: #333;
  border: none;
  cursor: pointer;
}

.is-completed {
  text-decoration: line-through;
}

.todo-item {
  background-color: #f4f4f4;
  padding: 0.7rem;
  border-bottom: 1px #ccc solid;
}

.del {
  float: right;
  color: white;
  background-color: red;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
</style>
