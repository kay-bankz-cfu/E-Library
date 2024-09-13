import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
import Homepage from "../src/Pages/Homepage";
import Signup from "./Components/Signup";
import Navbar from "./Pages/Navbar";
import Sustainability from "./Pages/Sustainability";
import Footer from "./Pages/footer";
import Libraries from "./Pages/Libraries";
import Discover from "./Pages/Discover";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/fountaindale" element={<Homepage/>}/>
        <Route path="/libraries" element={<Libraries/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
