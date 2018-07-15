Vue.component('tabs', {
  // é necessario definir o slot para que hajam $children elements
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li :class="{ 'is-active': tab.ativa }" v-for="tab in tabs">
            <a @click="selecionar(tab)" :href="tab.href">{{ tab.nome }}</a>
          </li>
        </ul>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  `,
  methods: {
    selecionar(tabSelecionada) {
      this.tabs.forEach(tab => {
        tab.ativa = (tab.nome == tabSelecionada.nome);
      });
    }
  },
  data() {
    return { tabs: [] }
  },
  created() {
    this.tabs = this.$children;
  }
});

Vue.component('tab', {
  props: {
    /*
    |
    | É possivel definir props do componente com valores default ou required
    |
    */
    nome: { required: true },
    selecionada: { default: false }
  },
  template: `
    <div v-show="ativa"><slot></slot></div>
  `,
  data() {
    return {
      /*
      |
      | Vue não permite que props sejam alteradas diretamente,
      | ativa deve ser uma variável dinâmina, logo, não pode ser uma prop
      |
      */
      ativa: this.selecionada
    }
  },
  computed: {
    href() {
      return "#" + this.nome.toLowerCase().replace(/ /g, "-");
    }
  }
});

new Vue({
  el: '#root'
});
