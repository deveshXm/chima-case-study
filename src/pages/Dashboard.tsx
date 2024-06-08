import React from "react";
import Button from "../components/common/Button";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [url, setUrl] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const { url } = location.state || {};

    if (!url?.length) {
      console.warn("No URL found in location state, navigating to home.");
      navigate("/");
    } else {
      setUrl(url);
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-5 min-h-screen">
      <div className="video-container w-full max-w-3xl">
        {url ? (
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
          <Button text={"Download"} />
        </a>
      </div>
      <div>
        <Button onClick={() => navigate("/")} text={"Go to Home"} />
      </div>
    </div>
  );
};

export default Dashboard;
