<template>
  <div id="dashboard">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'BackendPage',
    computed: {
      page() {
        return 'What'
      }
    }
  }
</script>