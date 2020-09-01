<template>
  <div class="click-counter">
    <div class="click-num">点击次数：{{num}}</div>
    <button class="click-btn" @click="handleClick">点击</button>
    <button class="click-reset0btn" @click="handleResetClick">清零</button>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: 0
      }
    },
    methods: {
      handleClick () {
        this.num += 1
      },
      handleResetClick () {
        this.num = 0
      }
    }
  }
</script>

<style>
  .click-counter {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    background-color: #ffffff;
    padding: 10px;
  }

  .counter-num,
  .counter-btn,
  .counter-reset-btn {
    flex: 1;
    margin: 3px;
  }
</style>