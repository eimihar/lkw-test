<template>
  <div>
    <div class="container" id="main-container">
      <div class="top-nav">
        <ul>
          <li>
            <i class="fas fa-book"></i>
            <router-link :to="{name: 'admin-manage-courses'}">Courses</router-link></li>
          <li>
            <i class="fas fa-users"></i>
            <router-link :to="{name: 'admin-manage-students'}">Students</router-link></li>
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
    name: "StudentPage"
  }
</script>

<style lang="scss">
  #main-container {
    margin-top: 35px;
  }
  #content-body {
    margin-top: 0px;
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
        }
      }
    }
  }
</style>