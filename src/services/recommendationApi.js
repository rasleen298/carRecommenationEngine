const API_URL =
  "http://localhost:5000/api/recommendations";

export const getRecommendations =
  async (preferences) => {
      console.log("preferebnces>>",preferences)

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    return response.json();
  };