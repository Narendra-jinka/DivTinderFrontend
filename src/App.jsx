import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./Components/Body";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Hero from "./Pages/Hero";
import { Provider } from "react-redux";
import appStore from "./Utils/AppStore";


function App() {
  return (
    <>
      <Provider store = {appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Hero />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
