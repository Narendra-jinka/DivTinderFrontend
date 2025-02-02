import { BrowserRouter,Routes,Route } from "react-router-dom";

import Body from "./Components/Body";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Hero from "./Pages/Hero";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element = {<Body />} >
            <Route path="/" element = {<Hero />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/profile" element = {<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
