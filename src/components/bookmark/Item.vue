<template>
  <div class="item" @click="visit">
    {{bookmark.title}}
  </div>
</template>

<script>
export default {
  props: ["bookmark"],
  methods: {
    visit () {
      window.open(this.bookmark.url, '_blank')
      this.$http.patch(`bookmarks/${this.bookmark._id}/visit`)
    }
  }
}
</script>
