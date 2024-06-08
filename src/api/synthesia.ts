// src/utils/createSyntheticVideo.js

import axios from "axios";
import { GenerateVideoData } from "../types";

const SYNTHESIA_API_URL = "https://api.synthesia.io/v2/videos";

export const generateVideo = async (generateVideoData: GenerateVideoData) => {
  const requestOptions = {
    method: "POST",
    url: SYNTHESIA_API_URL,
    headers: {
      Authorization: `${import.meta.env.VITE_SYNTHESIA_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: {
      title: generateVideoData.title,
      input: [
        {
          scriptText: generateVideoData.scriptText,
          avatar: "anna_costume1_cameraA",
          background: "green_screen",
        },
      ],
    },
  };

  try {
    const response = await axios(requestOptions);
    const videoData = response.data;
    return videoData;
  } catch (error) {
    console.error("Error creating synthetic video:", error);
    throw error;
  }
};

export const videoStatus = async (videoId: string) => {
  const pollingInterval = 5000; // 5 seconds polling interval
  const maxAttempts = 100;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const response = await axios.get(`${SYNTHESIA_API_URL}/${videoId}`, {
        headers: {
          Authorization: `${import.meta.env.VITE_SYNTHESIA_API_KEY}`,
        },
      });

      const videoData = response.data;

      if (videoData.status === "complete") {
        return videoData.download;
      }

      // Wait for the specified interval before polling again
      await new Promise((resolve) => setTimeout(resolve, pollingInterval));
    } catch (error) {
      console.error(`Error polling video status for video ID ${videoId}:`, error);
      throw error;
    }
  }

  throw new Error("Polling timed out before video was completed");
};
