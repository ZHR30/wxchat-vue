<template>
    <div class="container">
      <div class="message">{{msg}}</div>
      <button @click="clickHandle">点击msg</button>
      <clickCounter>插入信息slot</clickCounter>
      <div>{{ msg1 }}</div>
      <div>计数结果：{{ count }}</div>
      <a href="/pages/test1/main" class="navlink">进入计数器页面</a>
      <i-button type="primary" @click="bindViewTap">这是一个按钮</i-button>
      <i-icon type="activity" size="28" color="#80848f" />
      <i-icon type="collection_fill" />
    </div>
  </template>
  
<script>
  import clickCounter from '@/components/click-counter/click-counter'
  import globalStore from '@/store/global'
  export default {
    components: {
      clickCounter
    },
    computed: {
      count() {
        return globalStore.state.count
      }
    },
    data () {
      return {
        msg: 'Hello',
        msg1: 'Hello,World'
      }
    },
  
    methods: {
      clickHandle () {
        this.msg = 'Clicked!!!!!!'
      },
      formatMessage (str) {
        return str.trim().split(',').join('#')
      }
    }
  }
  </script>
  
  <style scoped>
  .message {
    color: red;
    padding: 10px;
    text-align: center;
  }
  .navlink {
    text-decoration: underline;
  }
  </style>