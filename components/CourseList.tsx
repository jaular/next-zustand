import { useCourseHydration } from "hooks/useHydration";
import { useCourseStore } from "store/courseStore";

const CourseList = () => {
  const hydrated = useCourseHydration();

  // const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
  //   (state) => ({
  //     courses: state.courses,
  //     removeCourse: state.removeCourse,
  //     toggleCourseStatus: state.toggleCourseStatus,
  //   })
  // );

  // Selectors vs destructuring - https://github.com/pmndrs/zustand/discussions/1045#discussioncomment-3044009

  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore(
    (state) => state.toggleCourseStatus
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
