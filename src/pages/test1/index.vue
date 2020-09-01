<template>
  <div class="container">
    <button class="calbtn" @click="hanleDecrement">-</button>
    <span class="calnum">{{ count }}</span>
    <button class="calbtn" @click="hanleIncrement">+</button>
  </div>
</template>

<script>
  import globalStore from '@/store/global'
export default {
  computed: {
    count () {
      return globalStore.state.count
    }
  },
  data () {
    return {
    }
  },

  methods: {
    hanleDecrement () {
      globalStore.commit('decrement')
    },
    hanleIncrement () {
      globalStore.commit('increment')
    }
  }
}
</script>

<style scoped>
  .btns {
    display: flex;
    align-items: center;
  }
  .calnum {
    color: red;
    font-size: 32px;
  }
</style>