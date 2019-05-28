<template>
  <div id="app">
  <div class="ui inverted segment">
  <div class="ui inverted secondary menu">
    <a class="item ">
      หน้าหลัก
    </a>
    <a class="item ">
      แก้ไข
    </a>
    <a class="item ">
      ตั้งค่า
    </a>
  </div>
</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
