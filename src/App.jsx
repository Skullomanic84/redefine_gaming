import Hero from "./components/Hero.jsx";
import About from "./components/about.jsx";
import Navbar from "./components/navbar.jsx";
import Features from "./components/features.jsx";
import Story from "./components/story.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";


const App = () => {


  return (
      <main className={"relative min-h-screen w-screen overflow-x-hidden"}>
          <Navbar />
          <Hero />
          <About />
          <Features />
          <Story />
          <Contact />
          <Footer />
      </main>
  )
}

export default App
