Vue.component('tarefa', {
  /*
  |
  | dentro do slot é possível recever texto do parent
  |
  */
  template: `<li><slot></slot></li>`,
  /*
  |
  | dentro de um component, 'data' deve ser uma função que retorna um objeto
  |
  */
  data() {
    return {};
  }
});

new Vue({
  el: '#root',
  data: {
    tarefas: [
      { texto: "Aprender Vue.js", completa: false },
      { texto: "Aprender Laravel", completa: true },
      { texto: "Aprender AngularJS", completa: true },
      { texto: "Aprender JavaScript", completa: true },
      { texto: "Aprender Angular", completa: false },
      { texto: "Aprender HTML", completa: true },
      { texto: "Aprender React", completa: false },
      { texto: "Aprender NoSQL", completa: false },
      { texto: "Se tornar Super Full Stack", completa: false }
    ]
  }
});
