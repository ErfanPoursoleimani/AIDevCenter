import About from "../components/Home/About"
import Main from "../components/Home/Main"
import Projects from "../components/Home/Projects"
import Testing from "../components/Home/Testing"

const Home = () => {
  return (
    <div className="flex flex-col items-center">
        <Main />
        <Projects />
        <Testing />
        <About />
    </div>
  )
}

export default Home
