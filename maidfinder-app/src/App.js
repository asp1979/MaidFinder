import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Profile from './components/Profile';
import About from './components/About';
import Layout from "./components/Shared/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      App.js
<div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="About" element={<About />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
    </div>
  );
}

export default App;
