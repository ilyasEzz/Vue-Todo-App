<template>
  <div id="app" class="container">
    <div class="fixed-action-btn">
      <button @click="createTodo" class="btn-floating btn-large waves-effect waves-light blue">
        <i class="material-icons">add</i>
      </button>
    </div>
    <!-- Required to render instances of TodosClass -->
    <Todos />

    <div ref="container" class="row"></div>
  </div>
</template>

<script>
import Vue from "vue";

import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Todos
  },
  data() {
    return {
      newTodo: ""
    };
  },

  methods: {
    createTodo() {
      let TodosClass = Vue.extend(Todos);
      let TodosInstance = new TodosClass();

      TodosInstance.$mount();
      this.$refs.container.appendChild(TodosInstance.$el);
    }
  }
};
</script>

<style>
@import "./assets/css/materialize.css";
* {
  box-sizing: border-box;
}

form {
  display: flex;
}

.is-completed {
  text-decoration: line-through;
  color: rgb(30, 161, 161);
}

.mx-2 {
  margin: 0 0.5rem;
}
</style>
