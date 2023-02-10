import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes
, BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import Ticket from "./Components/Ticket";
import Context2 from "./Components/context/Context2";

function App() {
  return (
    <Context2>

    <Router>

    <div className="app-container">
      <Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/book-ticket/:id" element={<Ticket/>} />
</Routes>

     
    </div>
    </Router>
    </Context2>
  );
}

export default App;
