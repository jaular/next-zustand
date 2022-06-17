import { useState } from "react";
import { useCourseStore } from "store/courseStore";
import { nanoid } from "nanoid";

const CourseForm = () => {
  const [courseTitle, setCourseTitle] = useState<string>("");
  const addCourse = useCourseStore((state) => state.addCourse);

  const handleCourseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!courseTitle) return alert("Please add a course title");
    addCourse({
      id: nanoid(),
      title: courseTitle,
      completed: false,
    });
    setCourseTitle("");
  };

  return (
    <form autoComplete="off" onSubmit={handleCourseSubmit}>
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button type="submit">Add course</button>
    </form>
  );
};

export default CourseForm;
