import React from "react";
import Button from "../components/common/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [url, setUrl] = React.useState(""); 
  const navigate = useNavigate(); 
  const location = useLocation();

  // Effect to retrieve the video URL from the location state when the component mounts or the location changes
  React.useEffect(() => {
    const { url } = location.state || {};

    if (!url?.length) {
      console.warn("No URL found in location state, navigating to home.");
      navigate("/"); // Navigate to the home route if no URL is found in the location state
    } else {
      setUrl(url);
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-5 min-h-screen">
      <div className="video-container w-full max-w-3xl">
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
      <div>
        <a href={url} download="video.mp4">
          <Button text={"Download"} /> {/* Button to download the video */}
        </a>
      </div>
      <div>
        <Button onClick={() => navigate("/")} text={"Go to Home"} /> {/* Button to navigate to the home route */}
      </div>
    </div>
  );
};

export default Dashboard;