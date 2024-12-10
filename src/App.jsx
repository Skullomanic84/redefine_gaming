import Hero from "./components/Hero.jsx";
import About from "./components/about.jsx";
import Navbar from "./components/navbar.jsx";
import Features from "./components/features.jsx";
import Story from "./components/story.jsx";


const App = () => {


  return (
      <main className={"relative min-h-screen w-screen overflow-x-hidden"}>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Story />
      </main>
  )
}

export default App
