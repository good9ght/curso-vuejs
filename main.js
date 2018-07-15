/*
|
| É possível criar uma instância de Vue e utilizá-la para emitir
| e ouvir eventos entre componentes
|
*/
window.Event = new Vue();

Vue.component('cupom', {
  /*
  |
  | $emit('eventoPersonalizado') pode ser usado para emitir um evento personalizado
  |
  */
  template: `
    <input type="text" v-model="codigo" @blur="aplicar">
  `,
  data() {
    return {
      codigo: ""
    }
  },
  methods: {
    aplicar() {
      Event.$emit('aplicar-cupom', this.codigo);
    }
  }
});

new Vue({
  el: '#root',
  data: {
    cupomAplicado: false,
    codigoCupom: ""
  },
  created() {
    Event.$on('aplicar-cupom', codigo => {
      if(codigo) {
        this.codigoCupom = codigo;
        this.cupomAplicado = true;
      } else {
        this.cupomAplicado = false;
      }
    });
  }
});
