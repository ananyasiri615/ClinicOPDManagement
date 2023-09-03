import React, { useState, useEffect } from "react";
import "./SuccessAnimation.css";

function SuccessAnimation() {
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to trigger the success animation
  const triggerSuccessAnimation = () => {
    setShowSuccess(true);

    // You can reset the success state after a few seconds if needed
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000); // 3000 milliseconds (3 seconds) in this example
  };

  // Automatically trigger the success animation when the component mounts
  useEffect(() => {
    triggerSuccessAnimation();
  }, []); // The empty dependency array ensures it runs only once when mounted

  return (
    <div>
      {/* Render the success animation when showSuccess is true */}
      {showSuccess && (
        <div className="success-animation">
          <div className="success-icon">&#10004;</div>
          <div className="success-text">Success!</div>
        </div>
      )}
    </div>
  );
}

export default SuccessAnimation;
