<template>
  <div style="width: 50%; margin-left: auto; margin-right: auto; text-align: center; margin-top: 50px;">
    <div><h4>Add New Subject</h4></div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="subject.name" placeholder="Subject's name">
      <div class="input-group-append">
      </div>
    </div>
    <div>
      <textarea v-model="subject.description" class="form-control" placeholder="Describe the detail of this subject" style="height: 150px;"></textarea>
    </div>
    <div style="margin-top: 10px;">
      <button @click="submit" class="btn btn-primary" type="button">Add</button>
      <button @click="cancel" class="btn btn-outline-secondary" style="margin-left: 10px;" type="button">Cancel</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddSubject',
    props: ['courseId', 'semesterId'],
    data() {
      return {
        subject: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      async submit() {
        await this.$axios.post('admin/courses/' + this.courseId + '/semesters/' + this.semesterId + '/subjects', this.subject);
        this.$emit('submitted');
      },
      cancel() {
        this.$emit('cancelled');
      }
    }
  }
</script>