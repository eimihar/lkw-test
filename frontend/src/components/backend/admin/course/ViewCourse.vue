<template>
  <div>
    <div style="font-size: 0.8em;">Manage Course</div>
    <h2>
      <span v-if="semesters.length == 0">Set up semesters for </span>
      {{ props.course.name }}
    </h2>
    <div v-if="semesters.length > 0">
      <div class="course-header">
        <ul>
          <li :class="{active: sem.id == semester.id }" @click="viewSubjects(sem)" v-for="sem in semesters" :key="sem.id">
            {{ sem.no }}
          </li>
        </ul>
        <label>Semester </label>
      </div>
      <div class="course-body" v-if="!isAddingSubject">
        <div class="no-entries-error" v-if="semester  && subjects.length == 0">Oops, you might want to <a href="javascript:;" @click.stop="addSubject">add</a> some subjects for semester {{ semester.no }}.</div>
        <div class="list-subjects">
          <div v-for="subject in subjects" :key="subject.id">
            {{ subject.name }}
          </div>
        </div>
      </div>
      <div class="course-body" v-if="isAddingSubject">
        <AddSubject @submitted="refreshSubjects" :semesterId="addingSubject.semesterId" :courseId="addingSubject.courseId" @cancelled="isAddingSubject = false"></AddSubject>
      </div>
    </div>
    <div v-if="semesters.length == 0">
      <div>How many semesters are there for this course?</div>
      <div><input class="form-control" type="number" v-model="setup.total" size="1"/></div>
      <div style="margin-top: 10px;"><input class="btn btn-primary" type="button" @click="setupCourse" value="Set up" /></div>
    </div>
  </div>
</template>

<script>
  import AddSubject from '../../../../components/backend/admin/course/AddSubject.vue';

  export default {
    async created() {
        // Code that will run only after the
        // entire view has been re-rendered
      this.init();
    },
    name: 'ListSemesters',
    props: ['props'],
    components: {AddSubject},
    watch: {
      async props() {
        this.init();
      }
    },
    data() {
      return {
        setup: {
          total: 1
        },
        semesters: [],
        subjects: [],
        semester: null,
        isAddingSubject: false,
        addingSubject: {
          courseId: null,
          semesterId: null
        }
      }
    },
    methods: {
      async init() {
        this.isAddingSubject = false;
        this.subjects = [];
        this.semesters = (await this.$axios.get('admin/courses/' + this.props.course.id + '/semesters')).data;
        this.setup.total = 1;

        if (this.semesters.length > 0)
          this.viewSubjects(this.semesters[0]);
      },
      async setupCourse() {
        for (let i = 0; i < this.setup.total; i++) {
          await this.$axios.post('admin/courses/' + this.props.course.id + '/semesters', {no: i + 1});
        }

        this.$emit('listener', ['submitted']);

        this.init();
      },
      addSubject() {
        this.isAddingSubject = true;
        this.addingSubject = {
          courseId: this.props.course.id,
          semesterId: this.semester.id
        };
      },
      refreshSubjects() {
        this.viewSubjects(this.semester);
      },
      async viewSubjects(semester) {
        this.isAddingSubject = false;
        this.semester = semester;
        this.subjects = (await this.$axios.get('admin/courses/' + this.props.course.id + '/semesters/' + semester.id + '/subjects')).data;
      }
    }
  }
</script>

<style lang="scss">
  .course-body {
    min-height: 400px;
  }
  
  .no-entries-error {
    text-align: center;
    margin-top: 100px;
    font-size: 1.3em;
    opacity: 0.8;
  }

  .course-header {
    height: 30px;
    position: relative;
    top: -60px;

    > label {
      margin-right: 14px;
      background: black;
      color: white;
      position: relative;
      top: 12px;
      padding: 5px;
      border-radius: 5px;
    }

    label {
      float: right;
    }
    ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      float: right;

      li {
        display: inline;
        padding: 5px;
        cursor: pointer;

        &.active {
          font-size: 2em;
          font-weight: bold;
          position: relative;
          top: 5px;
        }
      }
    }
  }
</style>