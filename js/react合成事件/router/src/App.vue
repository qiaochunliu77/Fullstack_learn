<template>
  <div id="app">
    <div id="nav">
      <p>
        导航 ：
        
        <router-link to="/">首页</router-link>|
        <router-link to="/hi">Hi页面</router-link>|
        <router-link to="/params/198/jspang website is very good">params</router-link> |
  <router-link to="/goParams/32/ewe">返回</router-link>|
      </p>
    </div>

    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
