import { HeroSection } from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectsSection/>
      <Footer />
    </>
  );
}

export default App;
