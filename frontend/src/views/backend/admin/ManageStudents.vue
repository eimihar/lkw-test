<template>
  <div>
    <div class="row">
      <div class="col-sm-3 course-nav">
        <ul id="course-list">
          <li v-for="crs in courses" :key="crs.id" :class="{active: course && crs.id == course.id}">
            <div @click="selectCourse(crs)">{{ crs.name }}</div>
          </li>
        </ul>
      </div>
      <div class="col-sm-9" v-if="course && addStudent">
        <AddStudent @submitted="addStudentSubmitted" @cancelled="addStudent = null" :course="addStudent"></AddStudent>
      </div>
      <div class="col-sm-9" v-if="course && !addStudent">
        <div class="header-manage-student">
          <div style="float: left;">
            <div>{{ course.name }}</div>
            <h2>All Students</h2>
          </div>
          <div style="float: right;">
            <input style="position: relative; top: 6px;" @click="register" type="button" class="btn btn-primary" value="Register"/>
          </div>
        </div>
        <div class="content-body">
          <div v-if="students.length == 0" class="no-entries-error" style="margin-top: 150px;">
            No student's is yet enrolled for this course.
          </div>
          <div class="table-responsive" v-if="students.length > 0" style="padding-top: 30px;">
            <table class="table">
              <tr v-for="student in students" :key="student.id">
                <td>
                  <div><strong>{{ student.user.full_name }}</strong></div>
                  <div><span style="opacity: 0.7;">{{ student.user.email }}</span></div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import AddStudent from '../../../components/backend/admin/student/AddStudent.vue';

  export default {
    async created() {
      this.init();
    },
    name: 'ManageStudents',
    components: {AddStudent},
    data() {
      return {
        courses: [],
        students: [],
        course: null,
        addStudent: null
      }
    },
    methods: {
      async init() {
        this.courses = (await this.$axios.get('admin/courses')).data;
      },
      async selectCourse(course) {
        this.course = course;
        this.addStudent = null;

        this.students = (await this.$axios.get('admin/courses/' + this.course.id + '/students')).data;
      },
      async register() {
        this.addStudent = this.course;
      },
      addStudentSubmitted() {
        this.addStudent = null;
        this.selectCourse(this.course);
      }
    }
  }
</script>

<style lang="scss" scoped></style>