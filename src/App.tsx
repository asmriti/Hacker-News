import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoryDetails from "./components/StoryDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:id" element={<StoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
