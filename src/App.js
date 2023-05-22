import NavBar from "./components/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Notification from "./Pagex/Notification";

function App() {
  return (
    <BrowserRouter>
      <Routes className = "h-screen w-screen">
        <Route path="/" element={ <NavBar />}>
          <Route index element={ <Home/> } />
          <Route path="/notifications" element = { <Notification/> } />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
