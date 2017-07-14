<template>
  <div id="app" class="ui segment pushable">
    <div class="ui inverted vertical menu sidebar">
      <Bookmark/>
    </div>
    <div class="pusher">
      <div class="ui basic segment">
        <div class="ui icon button" @click="toggleMenu">
          <i class="sidebar icon"/>
        </div>
        <Home/>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Bookmark from './components/bookmark/Main.vue'

export default {
  components: {Home, Bookmark},
  data () {
    return {}
  },
  mounted () {
    $('#app .ui.sidebar')
      .sidebar({
        context: $('#app')
      })
      // .sidebar('attach events', '#app .menu')
  },
  methods: {
    toggleMenu () {
      $('#app .ui.sidebar')
        .sidebar('toggle')
    },
    select (menuItem) {
      console.log('#selected:', menuItem)
      this.menuItem = menuItem
    }
  }
}
</script>

<style>
</style>
