import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* ✅ Protect Profile Route using ProtectedRoute */}
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
      </Routes>
    </Router>
  );
}

export default App;
