<template>
  <div>
    <div class="container" id="main-container">
      <div class="top-nav">
        <ul>
          <li>
            <i class="fas fa-book-open"></i>
            <router-link :to="{name: 'student-view-home'}">Home</router-link>
          </li>
          <li>
            <i class="fas fa-user"></i>
            <router-link :to="{name: 'student-view-profile'}">Profile</router-link>
          </li>
          <li style="float: right;">
            <a href="javascript:;" @click="logout">
              <i class="fas fa-power-off"></i>
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div id="content-body" class="card">
        <div class="card-body">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StudentPage",
    methods: {
      logout() {
        this.$router.push({name: 'login'});
      },
      isRoute(route) {
        this.$router.currentRoute.name == route;
      }
    }
  }
</script>