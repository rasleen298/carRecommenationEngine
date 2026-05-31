import { useLocation, useNavigate } from "react-router-dom";
import ComparisonTable from './ComparisonTable';

function RecommendationsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const recommendations = location.state?.recommendations || [];

  return (
    <div className="recommendations-page">
      <h1 className="recommendations-title">🚗 Your Top Picks</h1>
      <p className="recommendations-subtitle">
        Based on your preferences, here are the best matches
      </p>

      {recommendations.length === 0 ? (
        <div className="no-results">
          <p>No recommendations found.</p>
          <button className="back-btn" onClick={() => navigate("/")}>Start Over</button>
        </div>
      ) : (
        <div className="car-grid">
          {recommendations.map((car, index) => (
            <div key={car.id} className="car-card">
              <div className="card-rank">#{index + 1}</div>
              <div className="card-body">
                <h2 className="card-title">{car.make} {car.model}</h2>
                <div className="card-details">
                  <span className="card-price">₹{Number(car.price).toLocaleString("en-IN")}</span>
                  <span className="card-score">{car.score}% match</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {recommendations.length > 0 && (
        <button className="back-btn" onClick={() => navigate("/")}>Start Over</button>
      )}

      <ComparisonTable recommendations={recommendations} />
    </div>
  );
}

export default RecommendationsPage;