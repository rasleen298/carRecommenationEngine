import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CarListingPage() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) =>
        console.error("Error fetching cars:", err)
      );
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h1>Explore Cars</h1>
        <button className="go-back-btn" onClick={() => navigate(-1)}>←</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {cars.map((car) => (
          <div
            key={car.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              background: "#fff",
            }}
          >
            {/* Dummy Image */}
            <img
              src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=800"
              alt="car"
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            />

            <h3>
              {car.make} {car.model}
            </h3>

            <p>
              <strong>Price:</strong> ₹
              {car.price.toLocaleString()}
            </p>

            <p>
              <strong>Fuel:</strong>{" "}
              {car.fuelType}
            </p>

            <p>
              <strong>Mileage:</strong>{" "}
              {car.mileage} kmpl
            </p>

            <p>
              <strong>Safety:</strong> ⭐
              {car.safetyRating}/5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarListingPage;