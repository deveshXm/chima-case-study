import React, { useState } from "react";
import Button from "../components/common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import TextAreaField from "../components/common/TextAreaField";

const Dashboard: React.FC = () => {
  const [url, setUrl] = useState("");
  const [feedback, setFeedback] = useState(""); // State for feedback
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false); // State to track if feedback is submitted
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to retrieve the video URL from the location state when the component mounts or the location changes
  React.useEffect(() => {
    const { url } = location.state || {};

    if (!url?.length) {
      navigate("/"); // Navigate to the home route if no URL is found in the location state
    } else {
      setUrl(url);
    }
  }, [location, navigate]);

  // Function to handle feedback submission
  const handleFeedbackSubmit = () => {
    setFeedbackSubmitted(true); // Set feedbackSubmitted state to true
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-5 min-h-screen">
      <div className="video-container w-full max-w-3xl flex items-center justify-center">
        {url ? (
          // Render the video player
          <video className="w-full h-64 md:h-96 rounded-lg" controls>
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
      <a href={url} download="video.mp4">
        <Button text={"Download"} /> {/* Button to download the video */}
      </a>
      <div>
        {/* Feedback form */}
        {!feedbackSubmitted ? (
          <div className="flex flex-col gap-y-5 w-64">
            <TextAreaField value={feedback} name="feedbackForm" id="feedbackForm" label="" onChange={(e) => setFeedback(e.target.value)}></TextAreaField>
            <Button onClick={handleFeedbackSubmit} text={"Submit Feedback"} />
          </div>
        ) : (
          <p>Thanks for your feedback! Feedback submitted.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
