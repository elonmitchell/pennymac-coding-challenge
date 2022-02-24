import React, { useEffect, useState } from "react";
import "./Fade.css";

export const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div className="fade" style={{ animation: `${show ? "fadeIn" : "fadeOut"} 1s` }} onAnimationEnd={onAnimationEnd}>
        {children}
      </div>
    )
  );
};
