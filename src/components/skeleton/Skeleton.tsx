import React from "react";

import "./index.css";

const Skeleton: React.FC = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__img">img</div>
      <div className="skeleton__title"></div>
      <div className="skeleton__descr"></div>
      <div className="skeleton__price"></div>
    </div>
  );
};

export default Skeleton;
