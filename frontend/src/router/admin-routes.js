import ManageCourses from '../views/backend/admin/ManageCourses.vue';
import ManageStudents from '../views/backend/admin/ManageStudents.vue';

export default [
  {
    'name': 'admin-manage-courses',
    'path': 'courses',
    'component': ManageCourses
  },
  {
    name: 'admin-manage-students',
    'path': 'students',
    'component': ManageStudents
  }
]
