import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="w-full h-screen grid grid-cols-[0.8fr_3fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
