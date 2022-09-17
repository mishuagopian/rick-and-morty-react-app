import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  wildcardPath,
  charactersPath,
  characterPath,
} from "./constants/routes";
import CharactersListScreen from "./screens/CharactersListScreen";
import CharacterScreen from "./screens/CharacterScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={charactersPath} element={<CharactersListScreen />} />
        <Route path={characterPath} element={<CharacterScreen />} />
        <Route path={wildcardPath} element={<Navigate to={charactersPath} />} />
      </Routes>
    </Router>
  );
}

export default App;
