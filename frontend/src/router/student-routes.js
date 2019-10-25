import ViewProfile from "../views/backend/student/ViewProfile.vue"
import ViewHome from "../views/backend/student/ViewHome.vue"

export default [
  {
    name: 'student-view-home',
    path: 'home',
    component: ViewHome
  },
  {
    name: 'student-view-profile',
    path: 'profile',
    component: ViewProfile
  }
]