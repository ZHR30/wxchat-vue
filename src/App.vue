<script>
// 相当于原生小程序的app.js页面：包含了小程序的各种原生生命周期方法，如onLaunch、onShow等等。而在mpvue中，它使用了一个简单的Vue组件App.vue来实现等价的功能。
export default {
  created () {
    console.log('miniapp created!!!')
  }
}
</script>

<style>
  /* 这部分相当于原生小程序的app.wxss */
  .container {
    background-color: #ccc;
  }
</style>
