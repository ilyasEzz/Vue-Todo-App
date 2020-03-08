<template>
  <div class="action-menu row">
    <!-- Colors  -->
    <DropDown
      class="col action-menu"
      v-on:color-updated="colorUpdated"
      icon="palette"
      :items="colors"
    />
    <!-- Sort -->
    <DropDown class="col action-menu" icon="sort" v-on:sorting="sorting" />
    <!-- Search  -->
    <DropDown class="col" icon="search" :search="search" v-on:searching="searching" />
    <!-- Delete  -->
    <div class="col">
      <button class="btn-floating btn waves-effect waves-light red" @click="$emit('del')">
        <i class="material-icons">delete</i>
      </button>
    </div>
  </div>
</template>

<script>
import DropDown from "./DropDown";

export default {
  name: "Actions",
  components: {
    DropDown
  },
  data() {
    return {
      colors: [
        {
          color: true,
          title: "blue",
          hex: "#2196F3"
        },
        {
          color: true,
          title: "green",
          hex: "#42b883"
        },
        {
          color: true,
          title: "indigo",
          hex: "#3f51b5"
        },
        {
          color: true,
          title: "black",
          hex: "#333333"
        }
      ]
    };
  },
  props: {
    search: String
  },
  methods: {
    colorUpdated(color) {
      this.$emit("color-updated", color);
    },
    searching(currentSearch) {
      return this.$emit("searching", currentSearch);
    },
    sorting(sortBy) {
      this.$emit("sorting", sortBy);
    }
  }
};
</script>

<style>
.action-menu {
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
</style>