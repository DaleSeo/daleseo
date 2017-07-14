<template>
  <!-- <TagFilter v-model="query.tag"/> -->
  <div class="ui search item">
    <div class="ui left icon input" :class="{loading}">
      <i class="search icon"/>
      <input type="text" placeholder="Search..." v-model="query.keyword">
    </div>
  </div>
</template>

<script>
// import TagFilter from './TagFilter.vue'

export default {
  // components: {TagFilter},
  props: ['query', 'loading']
}
</script>
