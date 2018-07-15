Vue.component('modal', {
  /*
  |
  | $emit('eventoPersonalizado') pode ser usado para emitir um evento personalizado
  |
  */
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">`
          /*
          |
          | É possível dar nomes aos slots
          |
          */
          +`<slot name="titulo"></slot>
          </p>
          <button class="delete" aria-label="close" @click="fechar"></button>
        </header>
        <section class="modal-card-body">
          <slot>`
          /*
          |
          | Dentro dos slots é possível definir conteúdo default
          |
          */
          +`Conteúdo Default
          </slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="fechar">Salvar</button>
          <button class="button" @click="fechar">Cancelar</button>
        </footer>
      </div>
    </div>
  `,
  methods: {
    fechar() {
      this.$emit('fechar');
    }
  }
});

new Vue({
  el: '#root',
  data: {
    exibir: false
  }
});
