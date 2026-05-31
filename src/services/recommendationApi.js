
const API_URL = `https://carrecommendationserver.onrender.com/api/recommendations`;

export const getRecommendations =
  async (preferences) => {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    return response.json();
  };
