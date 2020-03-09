import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Filters
Vue.filter('natural-time', function(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
});

new Vue({
  render: h => h(App)
}).$mount('#app');
