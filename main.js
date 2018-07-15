Vue.component('lista-tarefas', {
  template:
  /*
  |
  | deve sempre existir um componente pai em componentes Vue
  |
  */
  `<ul>
      <tarefa v-for="tarefa in tarefas" v-text="tarefa.texto"></tarefa>
    </ul>`,
  data() {
    return {
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
  }
});

Vue.component('tarefa', {
  template: `<li><slot></slot></li>`,
});

new Vue({
  el: '#root'
});
