<template>
  <div>
    <Item :bookmark="bookmark" :key="bookmark.id" v-for="bookmark in bookmarks"/>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  components: {Item},
  props: ['bookmarks']
}
</script>
