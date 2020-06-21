import React from 'react'
import logo from './logo.svg'
import './App.css'
import CardFull from "./pages/IdeaFull/CardFull.jsx"
import Header from "./components/Header/Header"
import CreateIdea from "./pages/CreateIdea/CreateIdea"

function App() {
  return (
    <div className="App">
      <Header />
      <CreateIdea />
    </div>
  );
}

export default App;
