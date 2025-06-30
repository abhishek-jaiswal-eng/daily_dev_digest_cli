<template>
  <div v-if="visible" class="custom-alert">
    {{ message }}
    <button @click="hide">✕</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      visible: true
    };
  },
  methods: {
    hide() {
      this.visible = false;
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.custom-alert {
  background-color: #2196f3;
  color: white;
  padding: 12px 20px;
  margin: 10px 0;
  border-radius: 4px;
  position: relative;
}
.custom-alert button {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
}
</style>
