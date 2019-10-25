<template>
  <div>
    <div class="container" id="main-container">
      <div class="top-nav">
        <ul>
          <li>
            <router-link :to="{name: 'admin-manage-courses'}" :class="{active: isRoute('admin-manage-courses')}">
              <i class="fas fa-book"></i>
              Courses</router-link></li>
          <li>
            <router-link :to="{name: 'admin-manage-students'}" :class="{active: isRoute('admin-manage-students')}">
              <i class="fas fa-users"></i>
              Students</router-link>
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

<style lang="scss">
  #main-container {
    margin-top: 35px;
  }
  #content-body {
    margin-top: 0px;
    min-height: 500px;
  }

  .top-nav {
    margin-bottom: 15px;

    ul {
      text-align: left;
      padding: 0px;
      margin: 0px;
      list-style: none;
      padding-left: 20px;

      li {
        color: white;
        display: inline;
        padding: 5px;
        -webkit-border-radius: 5%;
        -moz-border-radius: 5%;
        border-radius: 5%;
        font-size: 1.4em;
        margin-right: 30px;

        i {
          padding-right: 10px;
        }

        a {
          color: white;

          &.router-link-active {
            background: #075bc2;
            padding: 5px 10px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }
        }
      }
    }
  }
</style>