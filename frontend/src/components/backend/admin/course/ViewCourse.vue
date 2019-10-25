<template>
  <div>
    <div class="course-header" style="height: 125px;">
      <div style="float: left;">
        <div style="font-size: 0.8em;">Manage Course</div>
        <h2>
          <span v-if="semesters.length == 0">Set up semesters for </span>
          {{ props.course.name }}
        </h2>
      </div>
      <div style="float: right;" v-if="semesters.length > 0" id="course-semester">
        <div>Semester {{ semester.no }}</div>
        <div>
          <ul>
            <li :class="{active: sem.id == semester.id }" @click="viewSubjects(sem)" v-for="sem in semesters" :key="sem.id">
              {{ sem.no }}
            </li>
          </ul>
        </div>
        <div>{{ monthNames[semester.month - 1] }} {{ semester.year }}</div>
      </div>
    </div>
    <div class="alert alert-danger" v-if="subjects.length > 0 && !hasStudents">
      This course has no student enrolled yet.
    </div>
    <div class="course-body" v-if="!isAddingSubject">
      <div class="no-entries-error" v-if="semester  && subjects.length == 0 && loaded">Oops, you might want to <a href="javascript:;" @click.stop="addSubject">add</a> some subjects for semester {{ semester.no }}.</div>
      <div class="list-subjects">
        <div v-for="subject in subjects" :key="subject.id">
          <div v-if="markingCheck(subject)" :class="{isMarking: !!markingSubject, 'mark-container': true}">
            <label class="subject-name">{{ subject.name }}</label>
            <span style="float: right;"><a href="javascript:;" v-if="hasStudents" @click.stop="mark(subject)" class="button-ready-mark">Ready to mark</a></span>
            <span style="float: right;"><a href="javascript:;" @click.stop="cancelMark(subject)" class="button-cancel-mark">Cancel</a></span>
            <SubjectMarking @submitted="markingSubject = null" v-if="markingSubject && markingSubject.id == subject.id" :subjectId="subject.id"></SubjectMarking>
          </div>
        </div>
      </div>
      <div v-if="subjects.length > 0" style="padding-left: 5px; padding-top: 10px;"><a href="javascript:;" @click="addSubject">Add new subject</a></div>
    </div>
    <div class="course-body" v-if="isAddingSubject">
      <AddSubject @submitted="refreshSubjects" :semesterId="addingSubject.semesterId" :courseId="addingSubject.courseId" @cancelled="isAddingSubject = false"></AddSubject>
    </div>
    <!--<div v-if="semesters.length == 0">
      <div>How many semesters are there for this course?</div>
      <div><input class="form-control" type="number" v-model="setup.total" size="1"/></div>
      <div style="margin-top: 10px;"><input class="btn btn-primary" type="button" @click="setupCourse" value="Set up" /></div>
    </div>-->
  </div>
</template>

<script>
  import AddSubject from '../../../../components/backend/admin/course/AddSubject.vue';
  import SubjectMarking from './SubjectMarking.vue';

  export default {
    async created() {
        // Code that will run only after the
        // entire view has been re-rendered
      this.init();
    },
    name: 'ListSemesters',
    props: ['props'],
    components: {AddSubject, SubjectMarking},
    watch: {
      async props() {
        this.init();
      }
    },
    data() {
      return {
        monthNames: ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ],
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
        },
        loaded: false,
        markingSubject: null
      }
    },
    computed: {
      hasStudents() {
        return this.subjects.length > 0 && this.props.course.total_students > 0;
      }
    },
    methods: {
      async init() {
        this.markingSubject = null;
        this.loaded = false;
        this.isAddingSubject = false;
        this.subjects = [];
        this.semesters = (await this.$axios.get('admin/courses/' + this.props.course.id + '/semesters')).data;
        this.setup.total = 1;

        if (this.semesters.length > 0)
          this.viewSubjects(this.semesters[0]);
      },
     /* async setupCourse() {
        for (let i = 0; i < this.setup.total; i++) {
          await this.$axios.post('admin/courses/' + this.props.course.id + '/semesters', {no: i + 1});
        }

        this.$emit('listener', ['submitted']);

        this.init();
      },*/
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
        this.markingSubject = null;
        this.loaded = false;
        this.isAddingSubject = false;
        this.semester = semester;
        this.subjects = (await this.$axios.get('admin/courses/' + this.props.course.id + '/semesters/' + semester.id + '/subjects')).data;
        this.loaded = true;
      },
      mark(subject) {
        this.markingSubject = subject;
      },
      cancelMark() {
        this.markingSubject = null;
      },
      markingCheck(subject) {
        return !this.markingSubject || (this.markingSubject && this.markingSubject.id === subject.id);
      }
    }
  }
</script>

<style lang="scss">
  .course-body {
    min-height: 400px;
  }

  #course-semester {
    float: right;
    position: relative;
    top: -10px;

    > div:first-child {
      font-size: 1.3em;
      position: relative;
      top: 6px;
      padding-left: 6px;
      background: black;
      border-radius: 5px;
      color: white;
    }

    > div:nth-child(2) {
      height: 50px;
    }

    > div:last-child {
      opacity: 0.8;
      padding-left: 6px;
      border-top: 1px solid black;
      padding-top: 5px;
    }
  }

  .mark-container {
    .button-ready-mark {
      display: block;
    }

    .button-cancel-mark {
      display: none;
    }

    &.isMarking {
      border: 0px;

      .subject-name {
        font-weight: bold;
      }

      .button-ready-mark {
        display: none;
      }

      .button-cancel-mark {
        display: block;
      }
    }
  }

  .no-entries-error {
    text-align: center;
    padding-top: 100px;
    font-size: 1.3em;
    opacity: 0.8;
  }

  .list-subjects {
    > div {
      > div {
        border-bottom: 1px solid gainsboro;
        padding: 5px;
      }
    }
  }

  .course-header {
    height: 75px;
    position: relative;

    label {
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