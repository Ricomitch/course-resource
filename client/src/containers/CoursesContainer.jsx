// import React, { useEffect, useState } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Courses from '../screens/Courses';
// import { getAllCourses } from '../services/courses'

// export const CoursesContainer = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       const coursesArray = await getAllCourses();
//       setCourses(coursesArray);
//     }
//     fetchCourses();
    

//   }, [])

//   return (
//     <Switch>
//       <Route path='/'>
//         <Courses
//           courses={courses}
//           />
//     </Route>
//     </Switch>
//   )
// }

