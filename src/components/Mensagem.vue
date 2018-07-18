<template>
  <div class="mensagem">
      <slot></slot>
  </div>
</template>

<script>
export default { }
</script>

<style>
    .mensagem {
        background-color: #e3e3e3;
        padding: 1em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border-radius: 0.2em;
        width: 7vw;
        margin: auto;
        margin-top: 30vh;
    }
</style>
