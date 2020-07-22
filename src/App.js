import React from 'react';
import Spotify from "./Container/Spotify";
import './App.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Spotify />
        </BrowserRouter>
    </div>
  );
}

export default App;
