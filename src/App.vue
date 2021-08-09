<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import header from './components/header'
  import footer from './components/footer'

  export default {
    components: {
      'Header'  : header,
      'Footer'  : footer,
    }
  }
</script>

<style>
  main{
    min-height: 600px;
  }
</style>