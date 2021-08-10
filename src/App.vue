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
  #app{

    background-color: #121212;
    color: white;
  }
  main{
    min-height: 700px;
  }

  ::-webkit-scrollbar {
      width: 0px;
    }
</style>