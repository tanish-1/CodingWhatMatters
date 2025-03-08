import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import PostList from "./components/PostList";
import PostDetail from "./pages/PostDetail";
import ThemeToggle from "./components/ThemeToggle";

const App = () => (
  <ThemeProvider>
    <Router>
      <div className="p-4 flex justify-between max-w-3xl mx-auto">
        <h1 className="text-xl font-bold">Virtualized Feed</h1>
        <ThemeToggle />
      </div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;