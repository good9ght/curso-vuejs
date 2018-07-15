Vue.component('mensagem', {
  props: [ 'titulo', 'texto' ],
  template: `
    <article class="message" v-show="exibir">
      <div class="message-header">
        <p>{{ titulo }}</p>
        <button class="delete" aria-label="delete" @click="exibir = false"></button>
      </div>
      <div class="message-body">
        {{ texto }}
      </div>
    </article>`,
  data() {
    return {
      exibir: true
    }
  }
});

new Vue({
  el: '#root'
});
