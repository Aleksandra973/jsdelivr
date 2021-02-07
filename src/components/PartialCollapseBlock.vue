<template>
  <div>
    <div  v-bind:class="{ 'collapsed-container': !isFullMode}">
      <slot></slot>
      <v-btn v-if="isFullMode" class="toggle-button button-align" small @click="isFullMode = !isFullMode">Show {{`${isFullMode ? 'less': 'more'}`}}</v-btn>
    </div>

    <v-btn v-if="!isFullMode" class="toggle-button button-align" small @click="isFullMode = !isFullMode">Show {{`${isFullMode ? 'less': 'more'}`}}</v-btn>
  </div>

</template>

<script>
export default {
name: "PartialCollapseBlock",
  props: {
    defaultHeight: null
  },
  data(){
    return {
      isFullMode: false
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