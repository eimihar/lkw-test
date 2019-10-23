<script>
  export default {
    name: 'ViewProfile',
    created() {
      console.log(this.$axios);
      this.student = {
        name: 'remi'
      }
    },
    data() {
      return {
        student: null
      }
    }
  }
</script>

<template>
  <div>
    <div>This is view </div>
    <div class="row" v-if="student">
      <div class="col-6">
        <h3>Name</h3>
        {{ student.name }}
      </div>
    </div>
  </div>
</template>