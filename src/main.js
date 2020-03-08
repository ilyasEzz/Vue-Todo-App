import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Filters
Vue.filter('natural-time', function(date) {
  return `${date.getHours()}:${date.getMinutes()}`;
});

new Vue({
  render: h => h(App)
}).$mount('#app');
