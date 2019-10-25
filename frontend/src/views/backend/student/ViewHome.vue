<template>
  <div v-if="course">
    <div class="content-header">
      <div class="content-title">
        <div>Currently enrolled in</div>
        <h2>{{ course.name }}</h2>
      </div>
    </div>
    <div class="content-body">
      <div class="content-semester" v-if="semester">
        <div>
          <ul>
            <li v-for="sem in semesters" :key="sem.id" @click="selectSemester(sem)" :class="{active: sem.id == semester.id}">
              <span v-if="sem.id == semester.id">Semester </span>
              {{ sem.no }}
            </li>
          </ul>
        </div>
        <div>{{ monthNames[semester.month] }}  {{ semester.year }}</div>
      </div>
      <div class="content-markings" v-if="markings.length > 0">
        <ul>
          <li v-for="marking in markings" :key="marking.id">
            <span>{{ marking.subject.name }}</span>
            <span class="marking-score">
              <span v-if="marking.is_marked">{{ marking.score }}</span>
              <span v-if="!marking.is_marked">Unmarked</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.init();
    },
    name: "ViewHome",
    data() {
      return {
        course: null,
        semester: null,
        semesters: [],
        markings: [],
        monthNames: ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ]
      }
    },
    methods: {
      async init() {
        let course = (await this.$axios.get('student/course')).data;
        let semesters = (await this.$axios.get('student/course/semesters')).data;
        let markings = (await this.$axios.get('student/marking/subjects/' + semesters[0].id)).data;

        this.course = course;
        this.semesters = semesters;
        this.semester = semesters[0];
        this.markings = markings;
      },
      async selectSemester(semester) {
        this.semester = semester;
        this.markings = (await this.$axios.get('student/marking/subjects/' + semester.id)).data;
      }
    }
  }
</script>

<style lang="scss" scoped="">
  .content-header {
    height: 65px;

    .content-title {
      float: left;
    }
  }

  .content-body {
    position: relative;
    border-top: 1px solid gainsboro;
    padding-top: 60px;
  }

  .content-markings {
    ul {
      list-style: none;
      padding: 0px;

      li {
        border-bottom: 1px solid gainsboro;
        padding: 10px 5px;
        height: 40px;
      }
    }

    .marking-score {
      float: right;
      display: inline;
    }
  }

  .content-semester {
    position: absolute;
    top: -52px;
    right: 0px;

    > div:first-child {
      height: 50px;
    }

    > div:last-child {
      opacity: 0.8;
      text-align: right;
      padding-top: 5px;
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