<template>
  <div>
    <div class="container" id="main-container">
      <div class="top-nav">
        <ul>
          <li><router-link :to="{name: 'student-view'}">Me</router-link></li>
          <li><router-link :to="{name: 'student-view'}">Subjects</router-link></li>
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