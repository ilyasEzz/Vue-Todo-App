<template>
  <div style="display: inline-block">
    <button class="btn-floating btn waves-effect waves-light mx-2" @click="isOpen = !isOpen">
      <i class="material-icons">{{ icon }}</i>
    </button>
    <transition name="fade" appear>
      <div class="dropdown" v-if="isOpen">
        <!-- Search  -->
        <div v-if="icon === 'search'" class="nav-wrapper">
          <div class="input-field">
            <input
              type="search"
              @change="$emit('searching', currentSearch)"
              v-model="currentSearch"
              style="background-color: inherit"
            />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </div>

        <!-- Colors -->
        <div
          v-else-if="icon === 'palette'"
          v-for="(item, i) in items"
          :key="i"
          class="dropdown-item"
        >
          <span :class="item.title" @click="upadateColor(item)" class="color-item"></span>
        </div>

        <!-- Sorting  -->
        <form @submit.prevent="sorting" class="sort-form" v-else-if="icon === 'sort'">
          <p>
            <label class="mx-2">
              <input class="with-gap" value="text" type="radio" v-model="sortBy" />
              <span>text</span>
            </label>
          </p>
          <p>
            <label class="mx-2">
              <input class="with-gap" value="date" type="radio" v-model="sortBy" />
              <span>date</span>
            </label>
          </p>
          <p>
            <label class="mx-2">
              <input class="with-gap" value="completion" type="radio" v-model="sortBy" />
              <span>completion</span>
            </label>
          </p>
          <input type="submit" value="sort" class="submit-sort" />
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ["icon", "items", "search"],
  data() {
    return {
      isOpen: false,
      currentSearch: "",
      sortBy: ""
    };
  },
  methods: {
    upadateColor(item) {
      if (item.color) this.$emit("color-updated", item.hex);
      this.isOpen = false;
    },
    searching() {
      return this.$emit("searching", this.currentSearch);
    },
    sorting() {
      this.isOpen = false;
      return this.$emit("sorting", this.sortBy);
    }
  }
};
</script>

<style >
@import "../assets/css/DropDown.css";
</style>