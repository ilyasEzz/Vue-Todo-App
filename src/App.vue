<template>
  <div id="app" class>
    <Navbar class="mb-3" />
    <div class="container">
      <transition name="fade" appear>
        <div ref="container" class="row">
          <!-- Required to render instances of TodosClass -->
          <Todos v-on:todos-updated="locStorage" />
          <Todos v-on:todos-updated="locStorage" />
        </div>
      </transition>
    </div>

    <div class="fixed-action-btn">
      <button @click="createTodo" class="btn-floating btn-large waves-effect waves-light blue">
        <i class="material-icons">add</i>
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import Todos from "./components/Todos";
import Navbar from "./layout/Navbar";

export default {
  name: "App",
  components: {
    Todos,
    Navbar
  },
  data() {
    return {
      storedTodos: []
    };
  },
  methods: {
    createTodo() {
      let TodosClass = Vue.extend(Todos);
      let TodosInstance = new TodosClass();

      TodosInstance.$mount();
      this.$refs.container.appendChild(TodosInstance.$el);
    },

    locStorage(todos) {
      let todosIndex = this.storedTodos.findIndex(
        storedTodo => storedTodo.id === todos.id
      );

      if (todosIndex >= 0) {
        this.storedTodos[todosIndex] = todos;
      } else {
        this.storedTodos = [...this.storedTodos, todos];
      }

      localStorage.setItem("storedTodos", this.storedTodos);
    }
  }
};
</script>

<style>
@import "./assets/css/materialize.css";
@import "./assets/css/App.css";
</style>
