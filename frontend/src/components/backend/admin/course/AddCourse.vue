<template>
  <div>
    <h2>Add New Course</h2>
    <form method="post" @submit.prevent="submit()">
      <div class="form-group">
        <label for="course_name">Course Name</label>
        <input type="text" class="form-control" v-model="course.name" id="course_name" placeholder="Enter course name">
      </div>
      <div style="margin-bottom: 10px; display: block;">Intake</div>
      <div class="form-group form-inline">
        <div>
          <select class="form-control" v-model="course.intake_month">
            <option value="">-- Select Month --</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <select class="form-control" v-model="course.intake_year">>
            <option value="">-- Select Year --</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Total Semesters</label>
        <input style="width: 120px;" type="number" class="form-control" v-model="course.total_semesters" placeholder="Total Semesters">
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
          name: '',
          intake_month: '',
          intake_year: '',
          total_semesters: 0
        }
      }
    }
  }
</script>