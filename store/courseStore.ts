import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type CourseProps = {
  id: string;
  title: string;
  completed: boolean;
};

type UseCourseState = {
  courses: CourseProps[];
  addCourse: (course: CourseProps) => void;
  removeCourse: (courseId: string) => void;
  toggleCourseStatus: (courseId: string) => void;
};

export const useCourseStore = create<UseCourseState>()(
  devtools(
    persist(
      (set) => ({
        courses: [],
        addCourse: (course) =>
          set((state) => ({ courses: [course, ...state.courses] })),
        removeCourse: (courseId) =>
          set((state) => ({
            courses: state.courses.filter((course) => course.id !== courseId),
          })),
        toggleCourseStatus: (courseId) =>
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? { ...course, completed: !course.completed }
                : course
            ),
          })),
      }),
      { name: "courses" }
    )
  )
);

/* persist = store the information into the local storage of browser 
  not ideal in all situation */

/* set = is begin used simply for to change any of the state of any variable 
  or any information */
