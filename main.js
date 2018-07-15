Vue.component('cupom', {
  /*
  |
  | $emit('eventoPersonalizado') pode ser usado para emitir um evento personalizado
  |
  */
  template: `
    <input type="text" v-model="codigo" @blur="$emit('aplicar-cupom', codigo)">
  `,
  data() {
    return {
      codigo: ""
    }
  }
});

new Vue({
  el: '#root',
  data: {
    cupomAplicado: false,
    codigoCupom: ""
  },
  methods: {
    aplicarCupom(codigo) {
      if(codigo) {
        this.codigoCupom = codigo;
        this.cupomAplicado = true;
      } else {
        this.cupomAplicado = false;
      }
    }
  }
});
