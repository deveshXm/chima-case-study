import axios from "axios";
import { FormData } from "../types";

export const generateScript = async (data: FormData) => {
  const prompt = `Create a concise script for a video. The script is aimed at introducing a company, explaining a product, and why it is beneficial for a specific group. Company info: ${data.companyInfo}, Product info: ${data.productInfo}, Target group profile: ${data.profileInfo}. The tone of the script must be dependent on the above information. Ensure the script is personalized for the target profile. Do not write in points, heading etc. Only plain text script with commas and period for stops. Length of script must not be greater than 150 characters.`;

  // Make a POST request to the Gemini API
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
    {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.candidates[0].content.parts[0].text;
};
