<template>
  <div v-if="user">
    <div class="row">
      <div class="col-sm-6">
        <div class="profile-row profile-name">
          <label>Name</label>
          <div>{{ user.full_name }}</div>
        </div>
        <div class="profile-row">
          <label>Email</label>
          <div>{{ user.email }}</div>
        </div>
        <div class="profile-row">
          <label>Gender</label>
          <div>{{ user.gender }}</div>
        </div>
        <div class="profile-row">
          <label>Birth Date</label>
          <div>{{ user.birth_date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ViewProfile',
    async created() {
      this.user = this.$store.getters.user;
      console.log(this.user);
    },
    data() {
      return {
        user: null
      }
    }
  }
</script>

<style lang="scss">
  .profile-row {
    margin-bottom: 30px;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 10px;

    label {
      font-size: 0.9em;
      opacity: 0.8;
    }

    > div {
      font-size: 25px;
    }
  }
</style>