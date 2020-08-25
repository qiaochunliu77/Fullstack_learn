<template>
  <button
    @click="handleClick"
    class="el-button"
    :class="[type?'el-button--'+type:'',
    {
        'is-round': round,
        'is-circle': circle
    }
  ]"
  >
    <slot></slot>
  </button>
</template>
<script>
// props 检查 结构
// vue怎么做
export default {
  // state
  data() {
    return {
      tit: "hello"
    };
  },
  props: {
    type: {
      type: String,
      defalt: "default"
    },
    round: Boolean,
    circle: Boolean
  },
  //   生命周期函数
  created() {
    console.log(this.type, this.tit);
  },
  //  事件
  methods: {
    handleClick(evt) {
        this.$emit('click',evt)
    }
  }
};
</script>
<style>
</style>