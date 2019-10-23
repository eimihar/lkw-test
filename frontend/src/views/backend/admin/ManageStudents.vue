<template>
  <div>
    <div class="row">
      <div class="col-sm-3">
        <ul id="course-list">
          <li v-for="course in courses" :key="course.id">
            <div @click="selectCourse(course)">{{ course.name }}</div>
          </li>
        </ul>
      </div>
      <div class="col-sm-9" v-if="course">
        <div class="header-manage-student">
          <div style="float: left;">
            <div>{{ course.name }}</div>
            <h2>All Students</h2>
          </div>
          <div style="float: right;">
            <input style="position: relative; top: 6px;" type="button" class="btn btn-primary" value="Register"/>
          </div>
        </div>
        <div class="content-body">
          <div v-if="students.length == 0" class="no-entries-error" style="margin-top: 200px;">
            No student's is yet enrolled for this course.
          </div>
          <div class="table-responsive" v-if="students.length > 0">
            <table class="table">
              <tr>
                <th>Name</th>
              </tr>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.name }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    async created() {
      this.init();
    },
    name: 'ManageStudents',
    data() {
      return {
        courses: [],
        students: [],
        course: null
      }
    },
    methods: {
      async init() {
        this.courses = (await this.$axios.get('admin/courses')).data;
      },
      async selectCourse(course) {
        this.course = course;

        this.students = (await this.$axios.get('admin/courses/' + this.course.id + '/students')).data;
      }
    }
  }
</script>

<style lang="scss" scoped></style>