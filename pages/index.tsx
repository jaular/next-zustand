import type { NextPage } from "next";
import Container from "components/Container";
import CourseForm from "components/CourseForm";
import CourseList from "components/CourseList";
import Counter from "components/Counter";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Next.js with Zustand</h1>

      <div>
        <p style={{ fontSize: "18px", fontWeight: "700" }}>
          Courses example (localStorage)
        </p>
        <CourseList />
        <CourseForm />
      </div>

      <div style={{ marginTop: "40px" }}>
        <p style={{ fontSize: "18px", fontWeight: "700" }}>Counter example</p>
        <Counter />
      </div>
    </Container>
  );
};

export default Home;
