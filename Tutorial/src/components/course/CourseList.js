import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
  return(
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Lenght</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(courses =>
        <CourseListRow key={courses.id} course={courses}/>
      )}
      </tbody>
      </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
