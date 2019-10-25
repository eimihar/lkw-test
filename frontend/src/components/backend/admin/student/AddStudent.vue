<template>
  <div>
    <div class="header-manage-student" style="height: 75px;">
      <div style="float: left;">
        <div>{{ course.name }}</div>
        <h2>Add New Student</h2>
      </div>
    </div>
    <div class="content-body">
      <form method="post" @submit.prevent="submit" class="row">
        <div class="form-group col-sm-6">
          <label>Full Name</label>
          <input v-model="student.full_name" @keyup="generateEmail()" type="text" class="form-control" placeholder="Student's full name">
        </div>
        <div class="form-group col-sm-6">
          <label>Gender</label>
          <select v-model="student.gender" class="form-control">
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non_binary">Non-Binary</option>
          </select>
        </div>
        <div class="form-group col-sm-6">
          <label>Email address</label>
          <input v-model="student.email" type="email" placeholder="Email address" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="form-group col-sm-6">
          <label>Password</label>
          <input v-model="student.password" type="password" class="form-control" placeholder="Default is 12345">
        </div>
        <div class="form-group col-sm-6">
          <label>Birthdate</label>
          <input v-model="student.birth_date" type="date" class="form-control">
        </div>
        <div class="col-sm-12" style="text-align: center; margin-top: 20px;">
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-default" @click="$emit('cancelled')" style="margin-left: 10px;">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddStudent',
  props: ['course'],
  data() {
    return {
      student: {
        full_name: null,
        email: null,
        password: null,
        birth_date: null,
        gender: ''
      }
    }
  },
  methods: {
    generateEmail() {
      this.student.email = this.student.full_name.split(' ')[0].toLowerCase() + '_' + Math.round(Math.random() * 100) + '@limkokwing.net';
    },
    async submit() {
      await this.$axios.post('admin/courses/' + this.course.id + '/students', this.student);

      this.$emit('submitted');
    }
  }
}
</script>