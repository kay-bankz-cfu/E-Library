import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./Pages/Homepage";
import Homepage from "../src/Pages/Homepage";
import Worldcat from "./Pages/Worldcat";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Otpverification from "./Components/Otpverification";
import Navbar from "./Pages/Navbar";
import Sustainability from "./Pages/Sustainability";
import Footer from "./Pages/footer";
import Libraries from "./Pages/Libraries";
import Discover from "./Pages/Discover";
import Topics from "./Pages/Topics";
import Topicsbooks from "./Pages/Topicsbooks";
import List from "./Pages/List";
import About from "./Pages/About";
import Librarians from "./Pages/Librarians";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fountaindale" element={<Homepage />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/list" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/librarians" element={<Librarians />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otpverification" element={<Otpverification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
