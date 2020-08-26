<template>
  <button
    @click="handleClick"
    class="el-button"
    :disabled="loading"
    :type="nativeType"
    :autofocus="autofocus"
    :class="[
    type?'el-button--'+type:'',
    buttonSize?'el-button--'+buttonSize:'',
    {
        'is-round': round,
        'is-circle': circle,
        'is-loading': loading,
        'is-disabled':buttonDisabled,
        'is-plain': plain
    }
  ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- v-if="!icon"  如果有图标 slot失效 -->
    <span v-if="$slots.defalt">
      <slot></slot>
    </span>
  </button>
</template>
<script>
// props 检查 结构
// vue怎么做
export default {
  name: 'ElButton',
  // state
  data() {
    return {
      tit: "hello"
    };
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    // 按钮的大小
    buttonSize() {
      return this.size;
    }
  },
  props: {
    size: {
      type: String,
      defalt: ""
    },
    autofocus: Boolean,
    nativeType: {
      type: String,
      defalt: "button"
    },
    type: {
      type: String,
      defalt: "default"
    },
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    plain: Boolean,
    icon: {
      type: String
    }
  },
  //   生命周期函数
  created() {
    console.log(this.type, this.tit);
  },
  //  事件
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>