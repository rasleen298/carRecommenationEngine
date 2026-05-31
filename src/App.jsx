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
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then(res => res.json())
      .then(data => console.log(data));//setMessage(data.message)
  }, []);

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





