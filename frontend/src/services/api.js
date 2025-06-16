const API_BASE = "http://localhost:8000";

export const generatePost = async (videoId, platform) => {
  const response = await fetch(`${API_BASE}/generate-post/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ video_id: videoId, platform })
  });

  if (!response.ok) throw new Error("Failed to generate post");
  return await response.json();
};
