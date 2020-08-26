<template>
  <div
    class="el-form-item"
    :class="[{
        'el-form-item--feedback': elForm&&elForm.statusIcon
    }]"
  ></div>
</template>

<script>
export default {
  name: "ElFormItem",
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {},
  inject: ["elForm"]
};
</script>
