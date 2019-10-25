<template>
  <div>
    <div class="table-responsive">
      <table class="table table-striped">
        <tr>
          <th>Student</th>
          <th style="width: 15%;">Score</th>
        </tr>
        <tr v-for="marking in markings" :key="marking.id">
          <td>{{ marking.student.user.full_name }}</td>
          <td>
            <input style="border: 0px;" class="form-control" placeholder="0.00" type="number" v-model="updated[marking.student_id].score" />
          </td>
        </tr>
      </table>
    </div>
    <div style="text-align: right;">
      <input type="button" class="btn btn-primary" @click="mark" value="Mark" />
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.init();
    },
    name: 'SubjectMarking',
    props: ['subjectId'],
    data() {
      return {
        updated: {
        },
        markings: []
      }
    },
    methods: {
      async init() {
        this.markings = (await this.$axios.get('admin/marking/' + this.subjectId)).data;

        for (let idx in this.markings) {
          let score = this.markings[idx].score;

          score = score === '0.00' ? '' : score;

          this.updated[this.markings[idx].student_id] = {
            id: this.markings[idx].id,
            student_id: this.markings[idx].student_id,
            score: score
          }
        }
      },
      async mark() {
        if (!confirm('Are you sure?'))
          return;

        await this.$axios.post('admin/marking/' + this.subjectId, {markings: this.updated});

        this.$emit('submitted');
      }
    }
  }
</script>

<style></style>