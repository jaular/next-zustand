import { useCourseHydration } from "hooks/useHydration";
import { useCourseStore } from "store/courseStore";

const CourseList = () => {
  const hydrated = useCourseHydration();

  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  if (!hydrated) {
    return (
      <div>
        <p style={{ fontWeight: "700", fontSize: "20px" }}>Loading...</p>
      </div>
    );
  }

  return (
    <ul>
      {courses.map((course, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              checked={course.completed}
              onChange={() => toggleCourseStatus(course.id)}
            />{" "}
            {course.title}
            <button
              style={{ marginLeft: "8px" }}
              onClick={() => removeCourse(course.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default CourseList;
