import Vue from 'vue/dist/vue.esm.js'
import Router from './router'
import Header from './components/header.vue'
import BodyClass from 'vue-body-class'

Vue.use(BodyClass, Router)

var app = new Vue({
  router: Router,
  el: '#app',
  components: {
    'navbar': Header,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(window.scrollY == 1) return 0;

      var to_name = parseInt(this.$route.name)
      if(window.scrollY < 1){
        to_name -= 1;
        if(to_name <= 0){
          to_name = 4;
        }
      }
      else if(window.scrollY > 1){
        to_name += 1;
        if(to_name >= 4){
          to_name = 1;
        }
      }

      this.$router.push({name: String(to_name)});
      return 0;
    }
  }
})