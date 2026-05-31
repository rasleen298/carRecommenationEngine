import { useEffect, useState } from "react";
import ChatBotPage from "./screens/ChatBotPage";
import RecommendationsPage from "./screens/RecommendationsPage";
import CarListingPage from "./screens/CarListingPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ChatBotPage />}
        />

        <Route
          path="/recommendations"
          element={<RecommendationsPage />}
        />

          <Route
          path="/carslisting"
          element={<CarListingPage />}
        />
      </Routes>
    </BrowserRouter>
    );
}

export default App;





