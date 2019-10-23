<template>
  <div>
    <h2>Add New Course</h2>
    <form method="post" @submit.prevent="submit()">
      <div class="form-group">
        <label for="course_name">Course Name</label>
        <input type="text" class="form-control" v-model="course.name" id="course_name" placeholder="Enter course name">
      </div>
      <!--<div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>-->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddCourse',
    methods: {
      async submit() {
        await this.$axios.post('admin/courses', this.course);

        this.$emit('listener', ['submitted', [this.course]]);
      }
    },
    data() {
      return {
        course: {
          name: ''
        }
      }
    }
  }
</script>