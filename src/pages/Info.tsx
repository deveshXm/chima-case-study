import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormData } from "../types";

import Form from "../components/Form";
import { generateScript } from "../api/llm";
import { MultiStepLoader } from "../components/common/Loader";
import { generateVideo, videoStatus } from "../api/synthesia";

const loadingStates = [
  {
    text: "Validating User Input",
  },
  {
    text: "Fetching API Configuration",
  },
  {
    text: "Setting up Video Parameters",
  },
  {
    text: "Generating Video Script",
  },
  {
    text: "Sending Data to Synthesia API",
  },
  {
    text: "Rendering Video",
  },
  {
    text: "Optimizing Video Quality",
  },
  {
    text: "Preparing Download Link",
  },
  {
    text: "Finalizing Video Output",
  },
  {
    text: "Ready for Download",
  },
];

const Info: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const data: FormData = {
        companyInfo:
          "Tech Innovators Inc., a pioneering company in AI and machine learning solutions, dedicated to driving innovation and enhancing productivity across various industries.",
        productInfo:
          "Busy professionals aged 30-45 working in the tech industry, who are looking for efficient tools to manage their daily tasks and enhance their productivity without compromising on quality",
        profileInfo:
          "Our flagship product, AI Assistant, leverages cutting-edge AI technology to streamline workflow, automate repetitive tasks, and provide insightful analytics to improve decision-making processes.",
      };
      setLoading(true);

      // Generate Script
      const scriptText = await generateScript(data);

      // Generate Video
      const video = await generateVideo({ title: "new-video", scriptText });

      // Get Video ID & Poll for 'completed' status
      const videoId = video.id;

      // Poll video status
      const videoUrl = await videoStatus(videoId);

      // Navigate to dashboard with url
      navigate("/dashboard", {
        state: {
          url: videoUrl,
        },
      });
    } catch (error) {
      console.log(error)
      navigate("/error", { state: { message: "An error occurred while submitting the form. Please try again." } });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000} />;

  return (
    <div className="min-h-screen flex justify-center items-center w-[">
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Info;
