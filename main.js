/*
|
| É possível utilizar components para somente atribuir comportamentos
| a pedaços de HTML
|
*/
Vue.component('progresso-view', {
  data() {
    return {
      porcentagem: 40
    }
  },
  methods: {
    aumentar() {
      this.porcentagem += 10;
    }
  }
});

new Vue({
  el: '#root'
});
