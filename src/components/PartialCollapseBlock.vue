<template>
  <div>
    <div  :class="{ 'collapsed-container': !isExpanded}">
      <slot></slot>
    </div>
    <v-btn class="toggle-button button-align" small @click="isExpanded = !isExpanded">Show
      {{ isExpanded ? 'less' : 'more' }}</v-btn>
  </div>

</template>

<script>
export default {
name: "PartialCollapseBlock",
  props: {
    value: Boolean
  },
  data(){
    return {

    }
  },
  computed: {
    isExpanded: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .collapsed-container {
    overflow: hidden;
    height: 55px;
  }

  .button-align {
    margin-left: 12px;
    margin-top: 10px;
  }

</style>
