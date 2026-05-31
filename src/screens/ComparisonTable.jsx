const rows = [
  { label: "Price", icon: "💰", render: (car) => `₹${car.price.toLocaleString("en-IN")}` },
  { label: "Fuel Type", icon: "⛽", render: (car) => car.fuelType },
  { label: "Mileage", icon: "📏", render: (car) => `${car.mileage} kmpl` },
  { label: "Safety Rating", icon: "🛡️", render: (car) => `${'⭐'.repeat(car.safetyRating)}` },
  { label: "Seats", icon: "💺", render: (car) => car.seats },
  { label: "Engine", icon: "🔧", render: (car) => car.specs?.engine },
  { label: "Power", icon: "⚡", render: (car) => car.specs?.power },
  { label: "Transmission", icon: "⚙️", render: (car) => car.specs?.transmission },
  { label: "Boot Space", icon: "🧳", render: (car) => car.specs?.bootSpace },
];

function ComparisonTable({ recommendations }) {
  if (!recommendations?.length) return null;

  return (
    <div className="comparison-wrapper">
      <h2 className="comparison-title">📊 Compare Cars</h2>

      <div className="comparison-scroll">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="attr-col">Attribute</th>
              {recommendations.map((car) => (
                <th key={car.id} className="car-col">
                  <span className="car-col-name">{car.make}</span>
                  <span className="car-col-model">{car.model}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="attr-cell">
                  <span className="attr-icon">{row.icon}</span>
                  {row.label}
                </td>
                {recommendations.map((car) => (
                  <td key={car.id} className="value-cell">
                    {row.render(car) || "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;