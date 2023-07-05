import About from "../about/page";
import Contact from "../contact/page";
import Projects from "../projects/page";
import Skills from "../skills/page";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-500">
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
