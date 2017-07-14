<template>
  <div>
    <Search :query="query"/>
    <List :bookmarks="bookmarks"/>
  </div>
</template>

<script>
import Search from './Search.vue'
import List from './List.vue'

export default {
  components: {Search, List},
  data () {
    return {
      bookmarks: [],
      query: {
        tag: '',
        keyword: ''
      },
      loading: false
    }
  },
  watch: {
    'query.keyword': function (val) {
      if (0 < val.length && val.length < 2) return
      this.fetch()
    },
    'query.tag': function (val) {
      this.fetch()
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      console.log('#fetch')
      this.$http.options = 'https://dale-bookmarks.herokuapp.com'
      this.loading = true
      let url = `bookmarks?keyword=${this.query.keyword}&tag=${this.query.tag}`
      this.$http.get(url)
        .then(res => res.body)
        .then(bookmarks => this.bookmarks = bookmarks)
        .then(_ => this.loading = false)
    }
  }
}
</script>
