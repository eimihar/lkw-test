<template>
  <div>
    <div class="row">
      <div class="col-sm-3 course-nav">
        <ul id="course-list">
          <li v-for="course in courses" :key="course.id" :class="{active: selectedCourse && course.id == selectedCourse.id}">
            <div @click="selectCourse(course)">{{ course.name }}</div>
          </li>
        </ul>
        <div style="text-align: right; margin-top: 15px;">
          <a href="javascript:;" @click="addCourse" style="text-decoration: underline;">Add new course</a>
        </div>
      </div>
      <div v-if="!component">
        <div class="col-sm-9" v-if="courses.length > 0">

        </div>
        <div class="col-sm-9" v-if="courses.length == 0">
          <div>Ooops you have not set up any courses yet.</div>
        </div>
      </div>
      <component class="col-sm-9" v-if="component" :props="props" :is="component" @listener="emitter"></component>
    </div>
  </div>
</template>

<script>
  import AddCourse from '../../../components/backend/admin/course/AddCourse.vue';
  import ViewCourse from '../../../components/backend/admin/course/ViewCourse.vue';
  import EventRegistry from "../../../classes/EventRegistry";

  const eventRegistry = new EventRegistry();

  export default {
    created() {
      this.loadCourses();
    },
    data() {
      return {
        courses: [],
        component: null,
        props: {},
        selectedCourse: null
      }
    },
    components: {AddCourse, ViewCourse},
    methods: {
      async loadCourses() {
        this.courses = (await this.$axios.get('admin/courses')).data;
      },
      emitter(event) {
        eventRegistry.emit(this.component, event);
      },
      addCourse() {
        this.useComponent('AddCourse').on('submitted', () => {
          this.component = null;
        });
      },
      selectCourse(course) {
        this.selectedCourse = course;
        this.useComponent('ViewCourse', {course: course});
      },
      useComponent(component, props) {
        this.component = component;

        if (props) {
          this.props = props;
        } else {
          this.props = {};
        }

        return eventRegistry.register(component);
      }
    }
  }
</script>

<style lang="scss">
  .course-nav {
    background: #e7f1fe;
    padding: 10px;
    padding-top: 5px;
    position: relative;
    top: -15px;
    min-height: 500px;
  }
  #course-list {
    list-style: none;
    padding: 0px;
    margin: 0px;
    font-size: 15px;

    li {
      padding: 5px;
      margin-bottom: 4px;
      cursor: pointer;
      border-bottom: 1px solid gainsboro;

      &.active {
        font-weight: bold;
        font-size: 1.1em;
      }
    }
  }
</style>