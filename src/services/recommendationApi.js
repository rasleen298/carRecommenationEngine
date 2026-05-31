import { BASE_URL } from "../config";

const API_URL = `${BASE_URL}/api/recommendations`;

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
